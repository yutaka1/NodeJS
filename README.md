# VueJS_NodeJS
VueJSとNodeJSの学習用

 # 環境構築

1. mkdir [workspace]
2. cd [workspace]
3. npm init -y
4. vs codeでworkspaceを開き、index.jsを作成する
5. package.jsonを以下のように書き直す。

"scripts": {
   "start": "node index.js"
 },

6. npm i -D typescript ts-node nodemon
7. npm i -g typescript
8. tsc --init
9. index.jsをindex.tsに変更する
10. package.jsonの中身を修正
  "start": "nodemon index.ts" 
nodemonのメモ
ソースを監視して、自動でサーバーを再起動してくれるツール。
nodeの代わりにnodemonを使ってコードを走らせると、コードの変更時にプロセスが自動で再起動する。

## Expressにより、Node.jsでサーバアプリを作る
Expressのインストール
  1. npm i express cors
  2. npm i -D @types/express @types/cors

## バリデーションチェック
validationのインストール
  1. npm i express-validation --save

## TypeORMの導入
Typescript用のORマッパー。Typescriptを使って、データベースに値を保存するためのライブラリ。\n
1. https://www.npmjs.com/package/typeorm を参考にインストール


## Passwordのhash化
1. npm i bcryptjs 
2. npm i @types/bcryptjs

## Json web Token
1. npm i jsonwebtoken 
2. npm i -D @types/jsonwebtoken

## クッキー
1. npm i -D @types/cookie-parser
2. npm install cookie-parser 

## 環境変数
1. npm i dotenv




# 実行
## サーバー実行
npm run start

## ロールとpermissionのマスターDB構築
npm run roles:seed

# SQL分を流す
roleとpermissionは、マスターなので作り直す時が全ての値が消えるようにしておく

SET FOREIGN_KEY_CHECKS = 0;

truncate table permission;
truncate table role;

SET FOREIGN_KEY_CHECKS = 1;