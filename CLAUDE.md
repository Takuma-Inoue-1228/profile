# takuma-inoue.com

井上拓磨の個人ポートフォリオサイト。ビルドツールもフレームワークも使わない静的サイト。HTML・CSS・JavaScript・画像だけで構成している。

- 公開URL: https://takuma-inoue.com/ （canonical は www なし）
- リポジトリ: https://github.com/Takuma-Inoue-1228/profile
- ホスティング: Azure Static Web Apps
- **`main` への push で本番へ自動デプロイされる。** push は公開と同じ意味なので、実行前に必ず確認を取る

## 構成

| ページ | ファイル |
| --- | --- |
| プロフィール | `index.html` |
| 経歴 | `career/index.html` |
| 制作物 | `products/index.html` |
| ギャラリー | `gallery/index.html` |
| お問い合わせ | `contact/index.html` |

CSS は `css/style.css` に集約。`css/ress.css` はリセット専用でサイト固有のスタイルは書かない（過去に `.more` が紛れ込んで不具合になった）。

`llms.txt` `robots.txt` `sitemap.xml` はルート直下。ページを増減したら sitemap と llms.txt も更新する。

## 編集時の決まり

- ヘッダーのナビは全5ページで同一。1ページだけ直さない
- 見出しは英語のナビ名 ＋ `.title-ja` の日本語併記
- レスポンシブの分岐は `@media screen and (max-width: 767px)` の1か所だけ
- ヘッダーは `position: fixed`。高さを変えたら `.content > .section:first-child` の `padding-top` と `.section` の `scroll-margin-top` を見直す
- スマホでヘッダーが1行に収まる下限は幅359px。ロゴやナビの文字サイズを変えるときは実測して確認する
- 外部リンクは `target="_blank"` と `rel="noopener"` を付ける
- 構造化データの Person は `@id` で全ページから同一エンティティを参照している。氏名や肩書を直すときは全ページ揃える

## 文章の書き方

読点（、）を多用しない。列挙以外では基本的に使わず、短い文を「。」で区切って重ねる。サイトのコピー・メタディスクリプション・コミットメッセージすべてに適用する。

## 作業の流れ

1. `python3 -m http.server 8000` でローカル確認（8765 は旧コピーを配信する別サーバーなので使わない）
2. PC幅とスマホ幅の両方で見た目を確認する
3. 日本語でコミットする
4. push の前に確認を取る
5. 改修内容は Notion ページ「takuma-inoue.com運用ガイドPj」末尾の「変更履歴」に追記する

## デザイン変更の範囲

指示された範囲だけ実装する。文字サイズや太さの強弱を、頼まれていないのに先回りして変えない。レイアウトが崩れる場合だけ余白やアンカー位置を直し、理由を伝える。
