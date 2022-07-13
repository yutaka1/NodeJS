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
11. Expressのインストール
  1. npm i express cors
  2. npm i -D @types/express @types/cors
## バリデーションチェック
12. validationのインストール
npm i express-validation --save
## TypeORMの導入
Typescript用のORマッパー。Typescriptを使って、データベースに値を保存するためのライブラリ。\n
13. https://www.npmjs.com/package/typeorm を参考にインストール

## Passwordのhash化
14. npm i bcryptjs 
15. npm i @types/bcryptjs

## Json web Token
16. npm i jsonwebtoken 
17. npm i -D @types/jsonwebtoken

