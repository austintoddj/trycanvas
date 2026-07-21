export type SiteStats = {
  downloads: number | null
  forks: number | null
  contributors: number | null
}

const REVALIDATE_SECONDS = 900

type PackagistPackageStats = {
  package: {
    downloads: {
      total: number
    }
    github_forks: number
  }
}

export async function getSiteStats(): Promise<SiteStats> {
  const [packagist, contributors] = await Promise.all([
    fetch('https://packagist.org/packages/austintoddj/canvas.json', {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS }
    })
      .then(async response =>
        response.ok ? ((await response.json()) as PackagistPackageStats) : null
      )
      .catch(() => null),
    fetch(
      'https://api.github.com/repos/austintoddj/canvas/contributors?per_page=100',
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: REVALIDATE_SECONDS }
      }
    )
      .then(async response =>
        response.ok ? ((await response.json()) as unknown[]) : null
      )
      .catch(() => null)
  ])

  return {
    downloads: packagist?.package.downloads.total ?? null,
    forks: packagist?.package.github_forks ?? null,
    contributors: contributors?.length ?? null
  }
}
