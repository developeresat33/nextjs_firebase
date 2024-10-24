import '../public/css/bootstrap.min.css'; // Bootstrap CSS

export default function Layout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>My Dashboard</title>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"></script>
      </head>
      <body>
        <main>{children}</main>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
