export type SiteStats = {
  downloads: number | null
  forks: number | null
  contributors: number | null
  stars: number | null
}

const REVALIDATE_SECONDS = 900

type PackagistPackageStats = {
  package: {
    downloads: {
      total: number
    }
    github_forks: number
    github_stars: number
  }
}

type GitHubRelease = {
  tag_name: string
  html_url: string
}

export async function getLatestRelease(): Promise<{
  tag: string
  url: string
} | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/austintoddj/canvas/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'trycanvas.app'
        },
        next: { revalidate: REVALIDATE_SECONDS }
      }
    )

    if (!response.ok) {
      return null
    }

    const release = (await response.json()) as GitHubRelease
    if (!release.tag_name) {
      return null
    }

    return {
      tag: release.tag_name,
      url:
        release.html_url ||
        'https://github.com/austintoddj/canvas/releases/latest'
    }
  } catch {
    return null
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
    contributors: contributors?.length ?? null,
    stars: packagist?.package.github_stars ?? null
  }
}
