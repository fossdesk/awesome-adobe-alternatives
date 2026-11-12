// Generated from FOSS Desk data/apps.yaml. No dependencies; network reads only.
const apps = [
  {
    "id": "darktable",
    "name": "darktable",
    "repo": "darktable-org/darktable",
    "officialUrl": "https://www.darktable.org/install/",
    "source": "auto"
  },
  {
    "id": "rawtherapee",
    "name": "RawTherapee",
    "repo": "RawTherapee/RawTherapee",
    "officialUrl": "https://rawtherapee.com/downloads/",
    "source": "auto"
  },
  {
    "id": "shotcut",
    "name": "Shotcut",
    "repo": "mltframework/shotcut",
    "officialUrl": "https://shotcut.org/download/",
    "source": "auto"
  },
  {
    "id": "gimp",
    "name": "GIMP",
    "repo": "GNOME/gimp",
    "officialUrl": "https://www.gimp.org/downloads/",
    "source": "manual"
  },
  {
    "id": "krita",
    "name": "Krita",
    "repo": "KDE/krita",
    "officialUrl": "https://krita.org/en/download/",
    "source": "manual"
  },
  {
    "id": "inkscape",
    "name": "Inkscape",
    "repo": "inkscape/inkscape",
    "officialUrl": "https://inkscape.org/release/",
    "source": "manual"
  }
];
if (process.argv.includes('--list')) {
  console.log(JSON.stringify(apps, null, 2));
} else {
  const output = [];
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'fossdesk-public-release-check',
    ...(process.env.GITHUB_TOKEN ? { Authorization: 'Bearer ' + process.env.GITHUB_TOKEN } : {}) };
  for (const app of apps) {
    if (app.source === 'manual') {
      output.push({ ...app, status: 'official-site', note: 'Check current version on the official website.' });
      continue;
    }
    try {
      const response = await fetch('https://api.github.com/repos/' + app.repo + '/releases/latest',
        { method: 'GET', headers, signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error('GitHub HTTP ' + response.status);
      const release = await response.json();
      if (!release.tag_name || !release.published_at || !Array.isArray(release.assets)) throw new Error('Invalid release response');
      output.push({ ...app, status: 'ok', version: release.tag_name, releaseDate: release.published_at,
        releaseUrl: release.html_url, assets: release.assets.map(a => ({ name: a.name, size: a.size, url: a.browser_download_url, digest: a.digest ?? null })) });
    } catch (error) {
      output.push({ ...app, status: 'error', error: error.message });
      process.exitCode = 1;
    }
  }
  console.log(JSON.stringify(output, null, 2));
}
