import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './index.module.css';

const icons = {
  disk: 'M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zM6 16h.01M10 16h.01',
  pulse: 'M22 12h-4l-3 9L9 3l-3 9H2',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
  trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  cloud: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z',
};

function Icon({name}) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

const integrations = ['Prometheus', 'Grafana', 'Alertmanager', 'AWS S3', 'MinIO', 'Docker', 'Helm', 'Rancher'];

const pipeline = [
  {
    title: 'Describe your backups',
    text: 'Tell backmon which disks to watch and what a healthy backup group looks like.',
    file: 'config.yaml',
    lines: [
      ['', 'environments:'],
      ['', '  aws-test-environment:'],
      ['', '    disks:'],
      ['', '      include:'],
      ['', '        - s3-photos'],
      ['', '    region: eu-central-1'],
    ],
  },
  {
    title: 'backmon scans',
    text: 'On every interval it inspects your storages and exposes the result for Prometheus.',
    file: 'GET /metrics',
    lines: [
      ['ok', 'backmon_backup_file_count{disk="mysql-dumps"} 7'],
      ['ok', 'backmon_backup_file_count_max{disk="mysql-dumps"} 7'],
      ['bad', 'backmon_backup_file_count{disk="s3-photos"} 0'],
      ['bad', 'backmon_backup_file_count_max{disk="s3-photos"} 4'],
    ],
  },
  {
    title: 'Alert when it matters',
    text: 'A Prometheus rule on those metrics notifies your team before you ever need the backup.',
    file: 'alert rule',
    lines: [
      ['', '- alert: BackupMissing'],
      ['', '  expr: backmon_backup_file_count'],
      ['', '    < backmon_backup_file_count_max'],
      ['', '  for: 15m'],
      ['bad', 'FIRING  disk="s3-photos"'],
    ],
  },
];

const faq = [
  ['What does backmon monitor?', 'The presence, size and timestamps of recurring backup files in a filesystem or an S3-compatible object storage. It does not create backups.'],
  ['Does it work with MinIO?', 'Yes. Any S3-compatible storage works, including AWS S3 and MinIO.'],
  ['How do I get alerts?', 'backmon exports Prometheus metrics. Use Alertmanager rules on those metrics to notify your team.'],
];

const sizes = [40, 44, 42, 48, 46, 52, 50, 56, 54, 60, 58, 64, 62, 68];

const flow = ['Storage', 'backmon', 'Prometheus', 'Alertmanager'];

function Term({children, file}) {
  return (
    <div className={styles.term}>
      {file && <div className={styles.termHead}><i /><i /><i /><small>{file}</small></div>}
      <pre><code>{children}</code></pre>
    </div>
  );
}

const rows = [
  ['mysql-dumps', 'daily', '7 / 7', '1.84 GB', 'ok', 'OK'],
  ['postgres-wal', 'hourly', '24 / 24', '312 MB', 'ok', 'OK'],
  ['photos-archive', 'weekly', '3 / 4', '48.2 GB', 'warn', 'LATE'],
  ['s3-photos', 'weekly', '0 / 4', '0 B', 'bad', 'MISSING'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'backmon',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Linux, Docker, Kubernetes',
  description: 'Monitoring of backup files in filesystems and object storages, exported as Prometheus metrics.',
  url: 'https://backmon.dreitier.com/',
  license: 'https://opensource.org/licenses/MIT',
  codeRepository: 'https://github.com/dreitier/backmon',
};

export default function Home() {
  return (
    <Layout description="backmon monitors backup files in filesystems and S3-compatible object storage and exposes them as Prometheus metrics for alerting.">
      <Head>
        <body className="landing" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <header className={styles.hero}>
        <div className="container">
          <Link className={styles.badge} to="/docs/intro">v3.2.2 · Prometheus-native backup monitoring</Link>
          <h1>Know your backups ran.<br /><span>Before you need them.</span></h1>
          <p className={styles.lead}>
            backmon watches backup files in filesystems and S3-compatible object storage
            and turns them into Prometheus metrics you can graph and alert on.
          </p>
          <div className={styles.buttons}>
            <Link className={`button button--lg ${styles.primary}`} to="/docs/intro">Get started</Link>
            <Link className={`button button--lg ${styles.ghost}`} href="https://github.com/dreitier/backmon">Star on GitHub</Link>
          </div>
          <div className={styles.cmd}>
            <span>$</span> helm install dreitier/backmon<i className={styles.cursor} aria-hidden="true" />
          </div>

          <div className={styles.panel} role="table" aria-label="Example backup status overview">
            <div className={styles.panelHead}>
              <b>Backup status</b><small>illustrative data</small>
            </div>
            <div className={`${styles.row} ${styles.th}`} role="row">
              <span>Disk</span><span>Group</span><span>Files</span><span>Latest size</span><span>Status</span>
            </div>
            {rows.map(([disk, group, files, size, state, label]) => (
              <div className={styles.row} role="row" key={disk}>
                <span>{disk}</span><span>{group}</span><span>{files}</span><span>{size}</span>
                <span><em className={`${styles.pill} ${styles[state]}`}>{label}</em></span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.page}>
        <section className={styles.strip} aria-label="Works with">
          <div className="container">
            <small>Works with</small>
            {integrations.map((name) => <span key={name}>{name}</span>)}
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className="container">
            <p className={styles.eyebrow}>Features</p>
            <h2>Everything you need to trust your backups</h2>
            <div className={styles.bento}>
              <div className={`${styles.card} ${styles.s4}`}>
                <Icon name="disk" />
                <h3>Filesystems &amp; object storage</h3>
                <p>Watch backup files on local disks or in S3-compatible storage like AWS S3 and MinIO.</p>
                <Term file="s3://backups">{`mysql/2026-10-13.sql.gz     1.8 GB
mysql/2026-10-12.sql.gz     1.8 GB
photos/2026-w41.tar        48.2 GB`}</Term>
              </div>
              <div className={`${styles.card} ${styles.s2}`}>
                <Icon name="bell" />
                <h3>Alert on failures</h3>
                <p>Get notified when a backup is missing, too small or too old.</p>
                <div className={styles.toast}><i /> <b>BackupMissing</b><span>s3-photos · weekly</span></div>
              </div>
              <div className={`${styles.card} ${styles.s2}`}>
                <Icon name="cloud" />
                <h3>Multiple environments</h3>
                <p>One instance, many storages, each with its own rules.</p>
                <div className={styles.chips}><span>aws-prod</span><span>minio-dev</span><span>nas-local</span></div>
              </div>
              <div className={`${styles.card} ${styles.s4}`}>
                <Icon name="pulse" />
                <h3>Prometheus metrics</h3>
                <p>Presence, size, age and duration of every backup, ready for Prometheus and Grafana.</p>
                <div className={styles.bars} role="img" aria-label="Illustrative backup size over 14 days">
                  {sizes.map((h, i) => <i key={i} style={{height: `${h}%`}} />)}
                </div>
              </div>
              <div className={`${styles.card} ${styles.s3}`}>
                <Icon name="trash" />
                <h3>Purge old backups</h3>
                <p>Remove outdated backup files automatically so storage does not fill up.</p>
              </div>
              <div className={`${styles.card} ${styles.s3}`}>
                <Icon name="download" />
                <h3>Central download</h3>
                <p>Download backup files from one place instead of logging into every storage.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <p className={styles.eyebrow}>How it works</p>
            <h2>From a config file to an alert in three steps</h2>
            <div className={styles.flow} aria-label="Data flow">
              {flow.map((name, i) => (
                <React.Fragment key={name}>
                  <span className={name === 'backmon' ? styles.node + ' ' + styles.nodeActive : styles.node}>{name}</span>
                  {i < flow.length - 1 && <b aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.steps}>
              <Tabs groupId="how">
                {pipeline.map(({title, text, file, lines}, i) => (
                  <TabItem key={title} value={String(i)} label={`${i + 1}. ${['Describe', 'Scan', 'Alert'][i]}`} default={i === 0}>
                    <p className={styles.stepText}>{text}</p>
                    <Term file={file}>{lines.map(([state, line], j) => (
                      <span key={j} className={state ? styles[state] : undefined}>{line}{'\n'}</span>
                    ))}</Term>
                  </TabItem>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        <section id="install" className={styles.section}>
          <div className="container">
            <p className={styles.eyebrow}>Install</p>
            <h2>Up and running in a minute</h2>
            <div className={styles.two}>
              <div className={styles.card}>
                <h3>Docker</h3>
                <Term file="shell">{`docker run -p 8000:8000 \\
  -v "$PWD/config.yaml:/etc/backmon/config.yaml" \\
  dreitier/backmon`}</Term>
              </div>
              <div className={styles.card}>
                <h3>Helm</h3>
                <Term file="shell">{`helm repo add dreitier https://dreitier.github.io/helm-charts/
helm repo update
helm install dreitier/backmon`}</Term>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.faqGrid}`}>
            <div>
              <p className={styles.eyebrow}>FAQ</p>
              <h2 className={styles.left}>Questions, answered</h2>
              <Link to="/docs/faq">More in the docs →</Link>
            </div>
            <div>
              {faq.map(([q, a]) => (
                <details className={styles.faq} key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
