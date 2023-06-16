<?php
    include("conexao.php");
       
    $nome=$_POST['nome'];
    $email=$_POST['email'];

    $sql="INSERT INTO cadastro(nome, email) 
            VALUES ('$nome', '$email')";
 
    if(mysqli_query($conexao, $sql)){
        echo "Dados cadastrados com sucesso!";
    }
    else{
        echo "Erro".mysql_connect_error($conexao);
    }
    mysqli_close($conexao);
    
?>