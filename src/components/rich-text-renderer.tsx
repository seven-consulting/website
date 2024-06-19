import { RichText } from '@graphcms/rich-text-react-renderer';

export function RichTextRenderer({ raw }: { raw: any }) {
  return (
    <RichText
      content={raw}
      renderers={{
        h1: ({ children }) => <h1 className="text-3xl font-extrabold text-gray-900">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-semibold text-gray-900">{children}</h4>,
        h5: ({ children }) => <h5 className="text-base font-medium text-gray-900">{children}</h5>,
        h6: ({ children }) => <h6 className="text-sm font-medium text-gray-900">{children}</h6>,
        a: ({ children, openInNewTab, ...rest }) => {
          return (
            <a target="_blank" {...rest} className="text-teal-600 hover:underline">
              {children}
            </a>
          );
        },
        ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
        underline: ({ children }) => <u>{children}</u>,
        bold: ({ children }) => <b>{children}</b>,
        italic: ({ children }) => <em>{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="px-4 py-1 border-l-4 italic bg-gray-50/50">{children}</blockquote>
        ),
        code: ({ children }) => <code className="p-2 bg-gray-50 rounded">{children}</code>,
        table: ({ children }) => (
          <table className="border min-w-full divide-y divide-gray-200">{children}</table>
        ),
        table_head: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
        table_body: ({ children }) => (
          <tbody className="divide-y divide-gray-200">{children}</tbody>
        ),
        table_header_cell: ({ children }) => (
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
          >
            {children}
          </th>
        ),
        table_cell: ({ children }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{children}</td>
        ),
      }}
    />
  );
}
