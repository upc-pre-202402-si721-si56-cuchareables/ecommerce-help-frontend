import "../styles/sass/styles.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="px-16">
          {children}
        </body>
    </html>
  );
}