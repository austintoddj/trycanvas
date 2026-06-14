import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Canvas/)
  })

  test('should render hero section with key content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText(
      'Publishing on your own terms'
    )
    await expect(page.locator('text=Canvas is a powerful tool')).toBeVisible()
  })

  test('should have working call-to-action buttons', async ({ page }) => {
    await page.goto('/')
    const getStartedButton = page.locator('a:has-text("Get started")').first()
    const liveDemoLink = page.locator('a:has-text("Live demo")').first()

    await expect(getStartedButton).toBeVisible()
    await expect(liveDemoLink).toBeVisible()
    await expect(getStartedButton).toHaveAttribute(
      'href',
      /github.com\/austintoddj\/canvas/
    )
    await expect(liveDemoLink).toHaveAttribute('href', /gitpod.io/)
  })

  test('should display community section with partner logos', async ({
    page
  }) => {
    await page.goto('/')
    await expect(
      page.locator('text=As featured in the community')
    ).toBeVisible()
    // Match the specific p tag in the Laravel News link
    await expect(page.locator('p:has-text("Laravel News")')).toBeVisible()
    // Match Product Hunt heading
    await expect(page.locator('p:has-text("Product Hunt")')).toBeVisible()
  })

  test('should display stats section with data', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Total downloads')).toBeVisible()
    await expect(page.locator('text=Active forks')).toBeVisible()
    await expect(page.locator('text=Contributors')).toBeVisible()
    await expect(page.locator('text=Open Source')).toBeVisible()
    await expect(page.locator('text=100%')).toBeVisible()
  })

  test('should have footer with GitHub link and license', async ({ page }) => {
    await page.goto('/')
    const githubLink = page
      .locator('a[href*="github.com/austintoddj/canvas"]')
      .last()
    const authorLink = page.locator('a[href*="x.com/austintoddj"]')

    await expect(githubLink).toBeVisible()
    await expect(authorLink).toBeVisible()
    await expect(page.locator('text=MIT License')).toBeVisible()
  })
})
