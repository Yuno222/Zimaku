import { test, expect, chromium } from '@playwright/test';


test('字幕入れ', async ({}) => {
    test.setTimeout(1200000);  
    // リモートデバッグChromeに接続
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    const languages = ["日本語","英語","アラビア語","インドネシア語","イタリア語","ウルドゥー語","スペイン語","タイ語","ドイツ語",
    "トルコ語","ハンガリー語","ヒンディー語","フィリピノ語","フランス語","ペルシア語","ポルトガル語","ベンガル語",
    "ベトナム語","ポーランド語","ロシア語","中国語","韓国語","スワヒリ語", "タミル語", "マラヤーラム語", "テルグ語",
     "マレー語","オランダ語", "ギリシャ語","ヘブライ語", "チェコ語", "デンマーク語", "スウェーデン語",
    "ノルウェー語", "フィンランド語", "ルーマニア語", "ブルガリア語", "カザフ語", "アフリカーンス語",
    "セルビア語", "クロアチア語","アイスランド語","ウクライナ語","ラトビア語","リトアニア語","エストニア語"
    ,"モンゴル語","スロバキア語","スロベニア語"]
  
    // 既に開かれているページを取得
    const pages = await browser.contexts()[0].pages();
    const page = pages[0]; // 一番最初のページを操作する例

    // 字幕入れ処理
    for(const language of languages){
      //字幕がすでに入っていないか確認
      const languageLocator = page.locator('#row-container').locator(`text= ${language}`);
      const languageCount = await languageLocator.count();
      
      //すでに入ってるならスキップ
      if(languageCount > 0){
          continue;
      }
      
      //追加する言語をクリック
      await page.getByLabel('言語を追加').nth(0).click();
      await page.getByRole('option', { name: language, exact:true}, ).click();

      // 言語のテキストを含む要素の行を取得
      const LanguageRow = page.locator(`text= ${language}`).locator('..').locator('..').locator('.tablecell-captions');
      
      //編集ボタン
      await LanguageRow.locator('.ytgn-video-translation-hover-cell').nth(0).hover();
      await page.locator('#captions-add').nth(0).click();
      await page.locator('#choose-auto-translate').click();
      await page.locator('#publish-button').click();
    }
  });
    