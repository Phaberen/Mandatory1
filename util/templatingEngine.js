import fs from 'fs';

// node can't import HTML files. so readPage uses fs.readFileSync
// to load them as text strings that constructPage can then assemble
// into one full page
export function readPage(path) {
    return fs.readFileSync(path, 'utf-8')
}

export function constructPage(page, options = {}) {
    const header = readPage('public/components/header.html');
    const footer = readPage('public/components/footer.html');

    return header.replace('{{TAB_TITLE}}', options.tabTitle ?? 'Node.js Docs')
        + page
        + footer
}