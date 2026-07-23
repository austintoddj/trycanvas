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
      /open-source publishing platform for Laravel/i
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
    await expect(
      page.getByText('composer require austintoddj/canvas')
    ).toBeVisible()
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

    await expect(githubLink).toBeVisible()
    await expect(authorLink).toBeVisible()
    await expect(
      page.locator('footer').getByRole('link', { name: 'MIT License' })
    ).toBeVisible()
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

  test('should follow system light preference and allow theme toggle', async ({
    page
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    await expect(page.locator('html')).not.toHaveClass(/dark/)
    await expect(page.locator('img[src*="editor.png"]').first()).toBeVisible()

    const toggle = page.getByRole('button', { name: 'Toggle theme' })
    await expect(toggle).toBeVisible()
    await toggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(
      page.locator('img[src*="editor-dark.png"]').first()
    ).toBeVisible()
  })

  test('should follow system dark preference on first visit', async ({
    page
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(
      page.locator('img[src*="editor-dark.png"]').first()
    ).toBeVisible()
  })
})
