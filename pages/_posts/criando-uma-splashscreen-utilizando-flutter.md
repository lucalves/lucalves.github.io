---
title: Criando uma SplashScreen utilizando Flutter
layout: post
date: 2019-10-16 09:00:00
tags:
  - flutter
  - development
---

Segundo o site Wikipedia, uma Splash Screen ou "tela de abertura" é um elemento de controle gráfico que consiste em uma janela contendo uma imagem, um logotipo e a versão atual do software. Geralmente utilizado quando o aplicativo é iniciado.

Neste artigo, abordaremos como criar uma Splash Screen utilizando Flutter, para o usuário ter o entendimento do funcionamento para caso for adicionar em um determinado projeto.

Iremos criar uma tela de fundo com um gradiente em vermelho e um logotipo centralizado para exibição, após isso exibiremos a tela inicial do aplicativo. Como demonstrado no GIF abaixo:

![Resultado-01](https://cdn-images-1.medium.com/max/800/1*r_irkPdtfLsXni1vRdMJoQ.gif)

# Antes de tudo…

Este artigo foi baseado na documentação do package splashscreen (no qual pode ser consultada clicando [aqui](https://github.com/KarimMohamed2005/SplashScreenFlutterPackage)), inclusive nesta mesma documentação possui outras propriedades que são muito úteis, não se limite apenas a este exemplo e explore diversas outras formas.

E utilizamos boas práticas da linguagem Dart, sendo baseada no artigo deste link. Também foi escrito de forma simples pra facilitar o entendimento do conteúdo que será apresentado aqui.

Utilizaremos o package abaixo:

https://pub.dev/packages/splashscreen

# O que faremos?

Nosso projeto será composto de dois arquivos, que serão o main.dart e home_screen.dart. Não focaremos em combinação de elementos de design.

O arquivo main.dart terá uma classe chamada MyApp e nela iremos criar nossa função denominada _introScreen que retornará a tela de introdução, e após a abertura dela iremos chamar o arquivo home_screen.dart, que será composta apenas por uma tela de fundo laranja e um texto branco centralizado.

# Instalando a dependência…

Iremos criar o projeto e denominaremos de splash_screen, e adicionaremos a dependência do package dentro do arquivo pubspec.yaml, utilizaremos a versão 1.2.0:

```splashscreen: ^1.2.0```

Após isso, rode o comando flutter pub get para instalar o package no projeto. Adicionaremos também no mesmo arquivo nossa imagem, que será uma logo centralizada. A imagem utilizada será esta:

![Logo](https://cdn-images-1.medium.com/max/800/1*fTVH1wCAgB457DtD4IbSAw.png)

Incluiremos ela no final do nosso arquivo pubspec.yaml:

```
assets:
  - assets/logo.png
```

# Pondo a mão na massa…

Feita as devidas configurações, iremos dar início ao desenvolvimento. Iremos deixar a classe main.dart da seguinte forma:

```
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:splashscreen/splashscreen.dart';
import 'home_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Splash Screen',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Splash Screen Flutter'),
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
    return _introScreen();
  }
}

Widget _introScreen() {
  return Stack(
    children: <Widget>[
      SplashScreen(
        seconds: 5,
        gradientBackground: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            Color(0xffED213A),
            Color(0xff93291E)
          ],
        ),
        navigateAfterSeconds: HomeScreen(),
        loaderColor: Colors.transparent,
      ),
      Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/logo.png"),
            fit: BoxFit.none,
          ),
        ),
      ),
    ],
  );
}
```

Nesta classe, realizamos o import do package, e criamos uma função denominada _introScreen e nela retornaremos o SplashScreen dentro de um Stack (neste link encontra-se um artigo, abordando o conceito) para posicionarmos o logotipo centralizado em cima do fundo.

O SplashScreen ficará com as cores do vermelho em um gradiente linear de fundo e o logotipo no meio, e após 5 segundos nossa tela inicial será apresentada.

Não utilizamos o simbolo de carregamento neste exemplo, mas ele pode ser usado modificando apenas a cor na propriedade loaderColor.
Feito isso, você percebeu que após o carregamento o navigateAfterSeconds aponta para a classe HomeScreen. Agora, iremos modificar nosso arquivo home_screen.dart criado no início do projeto e deixaremos desta forma:

```
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Splash Screen'),
        backgroundColor: Colors.orangeAccent,
      ),
      backgroundColor: Colors.orange,
      body: Center(
        child: Text('Tela inicial aqui :)',
        style: TextStyle(
          fontSize: 22.0,
          color: Colors.white
        )),
      ),
    );
  }
}
```

Nesta classe, criamos apenas um Scaffold com uma AppBar, uma cor de fundo laranja e um texto centralizado em branco. Agora após a o aplicativo executar o arquivo main.dart, irá abrir instantaneamente nossa classe criada acima, que nessa caso será a tela inicial do seu aplicativo.

# Finish!

Neste artigo, você aprendeu como criar uma SplashScreen de forma simples utilizando Flutter, abordamos a transição de tela após concluir os 5 segundos iniciais e usamos Stack para sobrepor widgets :)

O repositório deste projeto pode ser encontrado neste [link](https://github.com/coffee-and-code-community/splash_screen).

Se você aprendeu ou gostou do artigo, você pode dar até 50 "claps" aqui no Medium no botão ao lado, e isso me incentiva a trazer mais conteúdos relacionados a desenvolvimento de softwares.

Conecte-se também comigo no LinkedIn, clicando [aqui](https://www.linkedin.com/in/lucalves/). 

E acompanhe os projetos no GitHub através do link abaixo:

https://github.com/lucalves/