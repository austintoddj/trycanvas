import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Canvas/)
  })

  test('should expose tight Open Graph, Twitter, and JSON-LD SEO', async ({
    page
  }) => {
    await page.goto('/')

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://trycanvas.app'
    )
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Canvas.*publishing on your own terms/i
    )

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website'
    )
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://trycanvas.app'
    )
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      'content',
      'en_US'
    )
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://trycanvas.app/social.png'
    )
    await expect(
      page.locator('meta[property="og:image:width"]')
    ).toHaveAttribute('content', '2400')
    await expect(
      page.locator('meta[property="og:image:height"]')
    ).toHaveAttribute('content', '1256')
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
      'content',
      /Canvas/i
    )

    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image'
    )
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://trycanvas.app/social.png'
    )
    await expect(page.locator('meta[name="twitter:site"]')).toHaveAttribute(
      'content',
      '@austintoddj'
    )
    await expect(page.locator('meta[name="twitter:creator"]')).toHaveAttribute(
      'content',
      '@austintoddj'
    )

    const jsonLdRaw = await page
      .locator('script[type="application/ld+json"]')
      .first()
      .textContent()
    expect(jsonLdRaw).toBeTruthy()
    const jsonLd = JSON.parse(jsonLdRaw!) as {
      '@graph': Array<Record<string, unknown>>
    }
    const types = jsonLd['@graph'].flatMap(node => {
      const t = node['@type']
      return Array.isArray(t) ? t : [t]
    })
    expect(types).toEqual(
      expect.arrayContaining([
        'WebSite',
        'Organization',
        'SoftwareApplication',
        'SoftwareSourceCode'
      ])
    )
  })

  test('should render hero section with key content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Publishing')
    await expect(page.locator('h1')).toContainText('on your own terms')
    await expect(
      page.getByText(/write, edit, and brand your work/i)
    ).toBeVisible()
    await expect(page.getByText(/Just shipped/i)).toBeVisible()
  })

  test('should have working call-to-action buttons', async ({ page }) => {
    await page.goto('/')
    const getStartedButton = page.locator('a:has-text("Get started")').first()
    const githubButton = page.locator('a:has-text("View on GitHub")').first()

    await expect(getStartedButton).toBeVisible()
    await expect(githubButton).toBeVisible()
    await expect(getStartedButton).toHaveAttribute('href', '#install')
    await expect(githubButton).toHaveAttribute(
      'href',
      /github.com\/austintoddj\/canvas/
    )
  })

  test('should display features and install sections', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#features')).toBeVisible()
    await expect(page.getByText('Everything you need.')).toBeVisible()
    await expect(page.getByText('A quiet writing surface')).toBeVisible()
    await expect(page.getByText('AI in the draft, not the way')).toBeVisible()
    await expect(page.locator('#install')).toBeVisible()
    // Terminal types after scroll-into-view; human-paced typewriter + composer output
    await page.locator('#install').scrollIntoViewIfNeeded()
    await expect(
      page.getByText('composer require austintoddj/canvas')
    ).toBeVisible({ timeout: 30_000 })
    await expect(
      page.getByText(/Using version \^\d+\.\d+ for austintoddj\/canvas/)
    ).toBeVisible({ timeout: 20_000 })
    // Replay fades in only after the full sequence completes
    await expect(
      page.getByRole('button', { name: 'Replay animation' })
    ).toBeVisible({ timeout: 90_000 })
    await expect(page.getByText(/canvas_users/i)).toHaveCount(0)
  })

  test('should display product showcase chrome title', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('yourapp.test/canvas')).toBeVisible()
  })

  test('should display stats section with license marker', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Total downloads')).toBeVisible()
    await expect(page.getByText('Active forks')).toBeVisible()
    await expect(page.getByText('Contributors')).toBeVisible()
    await expect(page.getByText('License', { exact: true })).toBeVisible()
    await expect(page.getByText('MIT', { exact: true })).toBeVisible()
  })

  test('should have footer with platform tagline', async ({ page }) => {
    await page.goto('/')
    const githubLink = page
      .locator('footer a[href*="github.com/austintoddj/canvas"]')
      .first()
    const authorLink = page.locator('a[href*="x.com/austintoddj"]')
    const upgradeLink = page
      .locator('footer')
      .getByRole('link', { name: 'Upgrade guide' })
    const licenseLink = page
      .locator('footer')
      .getByRole('link', { name: 'MIT License' })

    await expect(githubLink).toBeVisible()
    await expect(authorLink).toBeVisible()
    // Production branch of austintoddj/canvas (master today; main at v7)
    await expect(upgradeLink).toHaveAttribute(
      'href',
      'https://github.com/austintoddj/canvas/blob/master/.github/UPGRADE.md'
    )
    await expect(licenseLink).toHaveAttribute(
      'href',
      'https://github.com/austintoddj/canvas/blob/master/license'
    )
    await expect(
      page
        .locator('footer')
        .getByText('A publishing platform for Laravel applications.')
    ).toBeVisible()
  })

  test('should not mention demo or Gitpod', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/gitpod/i)).toHaveCount(0)
    await expect(page.getByText(/live demo/i)).toHaveCount(0)
  })

  test('should show the header GitHub star button', async ({ page }) => {
    await page.goto('/')
    const starButton = page
      .locator('header a[href*="github.com/austintoddj/canvas"]')
      .filter({ hasText: 'Star' })
    await expect(starButton).toBeVisible()
    await expect(starButton).toContainText(/Star/)
    await expect(starButton).toHaveAttribute(
      'href',
      /github.com\/austintoddj\/canvas/
    )
    // Compact count (e.g. 3.3K) is optional: Packagist can fail and stars stay null
    const starCount = starButton.getByText(/^\d[\d.]*[KMB]?$/i)
    if ((await starCount.count()) > 0) {
      await expect(starCount).toBeVisible()
    }
  })

  test('should follow system light preference when no stored theme', async ({
    page
  }) => {
    await page.addInitScript(() => {
      localStorage.removeItem('theme')
    })
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    await expect(page.locator('html')).not.toHaveClass(/dark/)
    await expect(page.locator('img[src*="editor.png"]').first()).toBeVisible()
    await expect(
      page.locator('img[src*="editor-dark.png"]').first()
    ).toBeHidden()
  })

  test('should follow system dark preference when no stored theme', async ({
    page
  }) => {
    await page.addInitScript(() => {
      localStorage.removeItem('theme')
    })
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(
      page.locator('img[src*="editor-dark.png"]').first()
    ).toBeVisible()
    await expect(page.locator('img[src*="editor.png"]').first()).toBeHidden()
  })

  test('should toggle theme and persist the preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    // Clear once (not via addInitScript) so reload can still read the stored value
    await page.evaluate(() => localStorage.removeItem('theme'))
    await page.reload()

    const toggle = page.getByRole('button', { name: 'Toggle theme' })
    await expect(toggle).toBeVisible()
    await expect(page.locator('html')).not.toHaveClass(/dark/)

    await toggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(
      page.locator('img[src*="editor-dark.png"]').first()
    ).toBeVisible()
    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('theme')))
      .toBe('dark')

    await page.reload()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})
