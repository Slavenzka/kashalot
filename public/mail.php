<?php

if (filter_var($_POST['phone'])) {
  if (isset($_POST['name']) && isset($_POST['phone'])) {
    $userName = $_POST['name'];
    $userPhone = $_POST['phone'];
    $messageSubject = 'Новая заявка с сайта Кашалот';

    $to = "kashalotclinic@yandex.ru";
    $body = "Получена новая заявка!";
    $body .= "От кого: ".$userName. "\r\n";
    $body .= "Контактный телефон: ".$userPhone. "\r\n";

    $headers[] = 'From: kashalotclinic@yandex.ru';
    $headers[] = 'Reply-To: kashalotclinic@yandex.ru';

    mail($to, $messageSubject, $body, implode("\r\n", $headers));
  }
}
?>