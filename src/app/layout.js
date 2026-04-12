import "./globals.css";

export const metadata = {
  title: "Restaurant",
  description: "Cardápio de um restaurante Online!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}