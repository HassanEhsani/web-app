export default function LocaleHome({ params }: { params: { locale: string } }) {
  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🛍 فروشگاه ما ({params.locale})</h1>
      <p>این صفحه برای زبان {params.locale} است.</p>
    </main>
  );
}
