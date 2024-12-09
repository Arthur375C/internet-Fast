<?php
$response = $_POST['h-captcha-response'];
$secret = 'ES_472a8c8e428a4dffb06109c2265f8525';
$verify = file_get_contents("https://hcaptcha.com/siteverify?secret={$secret}&response={$response}");
$captcha_success = json_decode($verify);
if ($captcha_success->success) {
    // A verificação foi bem-sucedida
} else {
    // A verificação falhou
}
?>
