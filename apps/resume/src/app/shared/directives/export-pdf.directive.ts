import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appExportPdf]',
  standalone: true,
  exportAs: 'appExportPdf',
})
export class ExportPdfDirective {
  private elementRef = inject(ElementRef<HTMLElement>);

  filename = input<string>('document.pdf');

  export(): void {
    if (!this.elementRef) return;

    const element = this.elementRef.nativeElement;

    // Create a new window with the content to print
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      console.error('Failed to open print window');
      return;
    }

    // Clone the element and its styles
    const clone = element.cloneNode(true) as HTMLElement;

    // Get all stylesheets from the current document
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join('\n');
        } catch {
          // Handle CORS issues with external stylesheets
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = (styleSheet as CSSStyleSheet).href || '';
          return link.outerHTML;
        }
      })
      .join('\n');

    // Build the print document using modern DOM manipulation
    const doc = printWindow.document;
    doc.open();
    doc.close();

    // Set up the document structure
    doc.documentElement.innerHTML = `
      <head>
        <title>${this.filename()}</title>
        <style>
          ${styles}
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            @page {
              size: A4;
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        ${clone.outerHTML}
      </body>
    `;

    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        // Close window after printing or canceling
        printWindow.onafterprint = () => printWindow.close();
      }, 250);
    };
  }
}
