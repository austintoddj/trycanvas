import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Canvas/)
  })

  test('should render hero section with key content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText(
      'Publishing inside the app you already run'
    )
    await expect(
      page.getByText(/guest publishing layer for Laravel/i)
    ).toBeVisible()
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
    await expect(page.getByText('A quiet writing surface')).toBeVisible()
    await expect(page.getByText('AI you bring yourself')).toBeVisible()
    await expect(page.locator('#install')).toBeVisible()
    await expect(
      page.getByText('composer require austintoddj/canvas')
    ).toBeVisible()
  })

  test('should display stats section with license marker', async ({
    page
  }) => {
    await page.goto('/')
    await expect(page.getByText('Packagist downloads')).toBeVisible()
    await expect(page.getByText('GitHub forks')).toBeVisible()
    await expect(page.getByText('Contributors')).toBeVisible()
    await expect(page.getByText('License', { exact: true })).toBeVisible()
    await expect(page.getByText('MIT', { exact: true })).toBeVisible()
  })

  test('should have footer with GitHub link and license', async ({ page }) => {
    await page.goto('/')
    const githubLink = page
      .locator('footer a[href*="github.com/austintoddj/canvas"]')
      .first()
    const authorLink = page.locator('a[href*="x.com/austintoddj"]')

    await expect(githubLink).toBeVisible()
    await expect(authorLink).toBeVisible()
    await expect(page.getByText('MIT License')).toBeVisible()
  })

  test('should have theme toggle', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: 'Toggle theme' })
    await expect(toggle).toBeVisible()
    await toggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})
