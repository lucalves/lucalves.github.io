---
title: Como adicionar funcionamento ao botão ‘voltar’ no Flutter
layout: post
date: 2019-10-10 09:00:00
tags:
  - flutter
  - development
---

Construir um layout utilizando Flutter é relativamente simples, tendo a noção da linguagem e da estrutura de desenvolvimento, que é basicamente composta por Widgets, um aninhando ao outro.

Porém, volta e meia necessitamos de algo mais específico, e neste caso trataremos de como adicionar funcionalidade ao botão 'voltar' no flutter.

Nesse exemplo iremos atribuir a apresentação de um Dialog ao clicar no botão, e tendo como resultado o seguinte:

![Resultado-01](https://cdn-images-1.medium.com/max/800/1*6tgpgMVCnnHdhYBZf9tCqw.gif)

# Antes de tudo…

A criação deste artigo foi baseada na documentação oficial do Flutter, onde a mesma pode ser conferida aqui. Os termos e os códigos descritos aqui foram escritos pensados em uma forma que o entendimento do assunto fique o mais simples possível, ao contrário de alguns artigos no Medium que incluem muito código e dificulta o entendimento.

Trataremos da utilização da classe WillPopScope, que nos proporcionará o retorno ao clicar no botão de voltar. Você pode passar uma função de retorno de chamada que será chamada quando o botão foi clicado. Basta executar as tarefas a serem concluídas e depois retornar true.

# Pondo a mão na massa

Nossa aplicação será composta de apenas duas telas, a tela principal gerada pelo flutter (main.dart) e uma segunda tela que criaremos e nomearemos de segunda_activity.dart.

Nesse exemplo, foi criado um projeto com o nome de funcionamento_voltar, mas pode escolher qualquer nome para o projeto. Foram deletados todos os comentários da classe main.dart, do código inicial do flutter e deixei apenas a estrutura seguinte:

```
import 'package:flutter/material.dart';
import 'SegundaActivity.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Funcionamento do botão voltar',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Funcionamento do botão voltar'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Avançar para segunda tela:\n',
              style: TextStyle(
                fontSize: 16.0,
              ),
            ),
            RaisedButton(
              onPressed: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SegundaActivity()),
                );
              },
              color: Colors.blue,
              textColor: Colors.white,
              child: Text ('Clique aqui'),
            )
          ],
        ),
      ),
    );
  }
}
```

Após isso, realizaremos a criação da segunda tela, no qual será denominada de segunda_activity.dart, e nessa será adicionada o método _onBackPressed, para retornar no nosso retorno do botão voltar.

A classe ficará dessa forma:

```
import 'package:flutter/material.dart';
import 'main.dart';

void main() => runApp(SegundaActivity());

class SegundaActivity extends StatefulWidget {
  @override
  _SegundaActivityState createState() => _SegundaActivityState();
}

class _SegundaActivityState extends State<SegundaActivity> {
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: _onBackPressed,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Funcionamento do botão voltar'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Clique no botão voltar!',
                style: TextStyle(
                  fontSize: 16.0,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<bool> _onBackPressed() {
    return showDialog(
      context: context,
      builder: (context) => new AlertDialog(
        title: new Text('Você tem certeza?'),
        content: new Text('Você irá voltar para a tela anterior'),
        actions: <Widget>[
          new FlatButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: new Text('Não'),
          ),
          new FlatButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => MyApp()),
              );
            },
            child: new Text('Sim'),
          ),
        ],
      ),
    ) ?? false;
  }
}
```

Finalizando o exemplo. Caso necessite realizar o clone/download do exemplo deste artigo, o código poderá ser encontrado neste repositório.

Let's Code! :)