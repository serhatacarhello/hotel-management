export const metadata = {
  title: "Hotel Management Sanity.io",
  description: "Sanity.io studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
