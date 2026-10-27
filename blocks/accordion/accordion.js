export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [labelCell, bodyCell] = row.children;
    if (!labelCell) {
      row.remove();
      return;
    }

    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...labelCell.childNodes);

    const body = document.createElement('div');
    body.className = 'accordion-item-body';
    if (bodyCell) body.append(...bodyCell.childNodes);

    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });
}
