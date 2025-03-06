<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=frontend/home.html">
  <script>
    window.location.href = "frontend/home.html";
  </script>
</head>
<body>
  <p>Redirecting to <a href="frontend/home.html">Frontend/home.php</a>...</p>
  <?php
    header("Location: frontend/home.html");
    exit;
  ?>
</body>
</html>