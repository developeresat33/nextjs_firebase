import '../public/css/bootstrap.min.css'; // Bootstrap CSS,

import '../app/pages/css/style.css';
import { LoadingProvider } from './widgets/loading';


export default function Layout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>StarSolve Dashboard</title>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />

      </head>
      <body>
        <LoadingProvider>
          <main>{children}</main>

        </LoadingProvider>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
