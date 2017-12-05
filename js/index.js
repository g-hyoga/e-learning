const shuffle = () => {
  return Math.random() - .5
};

const init = () => {
  document.getElementById("test").classList.add("disable");

  const finishPreTest = JSON.parse(localStorage.getItem("finishPreTest"));
  if (finishPreTest) {
    document.getElementById("test").classList.remove("disable");
  }
}

const move = (e) => {
  const hoge = localStorage.getItem("questions");

  if (e === "outline") {
    location.href = "outline.html";
  } else if (e === "pretest") {
    if (localStorage.getItem("questions") == null || localStorage.getItem("questions") == undefined) {
      localStorage.setItem("questions", JSON.stringify(questions.sort(shuffle)));
    }
    location.href = "pretest.html";
  } else if (e === "test") {
    localStorage.setItem("questions", JSON.stringify(questions.sort(shuffle)));
    location.href = "test.html";
  } else if (e === "training") {
    localStorage.setItem("training", JSON.stringify(training));
    location.href = "training.html";
  }
};


const questions = [
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先踏切があることを表している。", "この標識はこの先線路があることを表している。", "この標識はこの先線路のため立ち入り禁止であることを表している。", "この標識はこの先、機関車が走っていることを表している。"],
    "answer": 0,
    "img": "img/image1.png",
    "commentary": "この先踏切があります。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は電車が見れる観光スポットであることを表している。", "この標識はこの先踏切があることを表している。", "この標識は電車優先道路であることを表している。", "この標識はこの先線路があることを表している。"],
    "answer": 1,
    "img": "img/image2.png",
    "commentary": "この先踏切があります。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は近くに学校、幼稚園があることを表している。", "この標識は子供が迷子になりやすいことを表している。", "この標識は子供に注意するように促している。", "この標識は子供がよく歩いていることを表している。"],
    "answer": 0,
    "img": "img/image3.png",
    "commentary": "近くに幼稚園・小学校などがあり、子供の飛び出しなどに注意が必要です。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は車を停止するように促している。", "この標識はこの先一般道路であることを表している。", "この標識は信号機がないので注意するように促している。", "この標識はこの先信号機があることを表している。"],
    "answer": 3,
    "img": "img/image4.png",
    "commentary": "この先信号があります。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先道がねじれていることを表している。", "この標識はこの先スピードがでやすいことを表している。", "この標識はこの先車がガタガタ揺れることを表している。", "この標識はこの先、すべりやすいことを表している。"],
    "answer": 3,
    "img": "img/image5.png",
    "commentary": "この先すべりやすい道が続きます。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先山から水が落ちてきていることを表している。", "この標識はこの先山道であることを表している。", "この標識はこの先落石に注意が必要であることを表している。", "この標識はこの先三角コーンがあることを表している。"],
    "answer": 2,
    "img": "img/image6.png",
    "commentary": "落石に注意が必要です。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先路面が凹凸であることを表している。", "この標識はこの先山道であることを表している。", "この標識は障害物に注意するように促している。", "この標識は陥没に注意するように促している。"],
    "answer": 0,
    "img": "img/image7.png",
    "commentary": "この先凹凸の道があります。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先合流交通があることを表している。", "この標識はこの先道がわかれていることを表している。", "この標識は障害物があることを表している。", "この標識は優先道路であることを表している。"],
    "answer": 0,
    "img": "img/image8.png",
    "commentary": "この先合流があるので注意が必要です。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先一車線になることを表している。", "この標識はこの先合流交通があることを表している。", "この標識はこの先車線数が減少することを表している。", "この標識はこの先道幅が狭くなることを表している。"],
    "answer": 2,
    "img": "img/image9.png",
    "commentary": "この先車線数が減少します。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はこの先一車線になることを表している。", "この標識はこの先幅員が減少することを表している。", "この標識はこの先車線数が減少することを表している。", "この標識はこの先道幅が狭くなることを表している。"],
    "answer": 1,
    "img": "img/image10.png",
    "commentary": "この先幅員が減少します。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は停車禁止であることを表している。", "この標識は駐停車禁止であることを表している。", "この標識は追い越し・追い抜き禁止であることを表している。", "この標識は駐車禁止であることを表している。"],
    "answer": 1,
    "img": "img/image11.png",
    "commentary": "駐停車禁止を意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は停車禁止であることを表している。", "この標識は駐停車禁止であることを表している。", "この標識は追い越し・追い抜き禁止であることを表している。", "この標識は駐車禁止であることを表している。"],
    "answer": 3,
    "img": "img/image12.png",
    "commentary": "駐車禁止を意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は車を停車できることを表している。", "この標識は危険物積載車両は通行止めであることを表している。", "この標識は危険車両は通行禁止であることを表している。", "この標識は危険運転禁止あることを表している。"],
    "answer": 1,
    "img": "img/image13.png",
    "commentary": "危険物車両は通行止めであることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は自転車専用道路であることを表している。", "この標識は車を停車できることを表している。", "この標識は二輪車の通行が禁止であることを表している。", "この標識は歩行者の通行禁止であることを表している。"],
    "answer": 0,
    "img": "img/image14.png",
    "commentary": "自転車専用道路であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は車のみ進入可能であることを表している。", "この標識は自転車を降りてのみ通行可能であることを表している。", "この標識は自転車および歩行者専用道路であることを表している。", "この標識は優先道路であることを表している。"],
    "answer": 2,
    "img": "img/image15.png",
    "commentary": "歩行者と自転車の専用道路であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は近くに幼稚園があることを表している。", "この標識は子供から手をつないでおくことを表している。", "この標識は歩行者専用道路であることを表している。", "この標識は子供の飛び出し注意であることを表している。"],
    "answer": 2,
    "img": "img/image16.png",
    "commentary": "歩行者専用道路であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は駐停車禁止であることを表している。", "この標識は高さ制限3.3mであることを表している。", "この標識は最高速度30m/h以内であることを表している。", "この標識は車幅3.3m以内であることを表している。"],
    "answer": 1,
    "img": "img/image17.png",
    "commentary": "高さ制限3.3m以内であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は最大幅2.2m以上でことを表している。", "この標識は最高速度20km/h以内であることを表している。", "この標識は高さ制限2.2m以内であることを表している。", "この標識は最大幅2.2m以内であることを表している。"],
    "answer": 3,
    "img": "img/image18.png",
    "commentary": "車の幅が2.2m以内であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は最高速度50km/h以内であることを表している。", "この標識は最高速度50km/h以上であることを表している。", "この標識は最低速度50km/h以上であることを表している。", "この標識は最低速度50km/h以内であることを表している。"],
    "answer": 0,
    "img": "img/image19.png",
    "commentary": "最高速度は50km/h以内です。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は転回禁止であることを表している。", "この標識は直進のみ可能であることを表している。", "この標識は一方通行であることを表している。", "この標識はこの先危険物があることを表している。"],
    "answer": 2,
    "img": "img/image20.png",
    "commentary": "矢印の方向のみ進行できる一方通行の道路であることを意味しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識のある道路は、歩行者の通行も禁止されている。", "この標識は「車両通行止め」である。", "この標識のある道路では、路面電車は通行できる。", "この標識のある道路では、自転車は通行できる。"],
    "answer": 1,
    "img": "img/image21.png",
    "commentary": "すべての歩行者・車・路面電車の通行ができません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識がある場所では、原動機付自転車と自転車は通行できる。", "この標識がある場所では、全ての車両の通行が禁止されている。", "この標識がある場所では、歩行者の通行も禁止されている。", "この標識は「駐車禁止」である。"],
    "answer": 2,
    "img": "img/image22.png",
    "commentary": "車（自動車・原動機付自転車・軽車両）は通行できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は「車両通行止め」である。", "この標識は「通行止め」である。", "この標識は「車両進入禁止」である。", "この標識は「進入禁止」である。"],
    "answer": 3,
    "img": "img/image23.png",
    "commentary": "車は進入できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識がある場所では、すべての自動車の通行が禁止されている。", "この標識は「車両進入禁止」である。", "この標識がある場所では、大型特殊自動車は通行できる。", "この標識がある場所では、二輪の自動車は通行できる。"],
    "answer": 4,
    "img": "img/image24.png",
    "commentary": "二輪の自動車（大型自動二輪車・普通自動二輪車など）は通行できるが、その他の自動車は通行できない。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は、すべての大型自動車の通行が禁止されている。", "この標識は「大型車両一時停止」である。", "この標識は「大型車両駐車禁止」である。", "この標識は、大型貨物自動車と大型特殊自動車の通行を禁止している。"],
    "answer": 4,
    "img": "img/image25.png",
    "commentary": "大型貨物自動車と大型特殊自動車、特定中型貨物自動車は通行できない。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は「マイクロバス通行止め」である。", "この標識は「中型・大型乗用自動車通行止め」である。", "この標識は「大型乗用自動車等通行止め」である。", "この標識は「中型乗用自動車等通行止め」である。"],
    "answer": 3,
    "img": "img/image26.png",
    "commentary": "大型乗用自動車 ・特定中型乗用自動車は通行できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は「自転車通行止め」である。", "この標識がある場所では、原動機付自転車は通行できない。", "この標識がある場所では、自動二輪車は通行できる。", "この標識がある場所では、自転車は通行できない。"],
    "answer": 2,
    "img": "img/image27.png",
    "commentary": "二輪の自動車（大型自動二輪車・普通自動二輪車）と原動機付自転車は通行できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識はすべての軽車両が通行できないことを表している。", "この標識は「軽車両通行止め」である。", "この標識は「自転車以外の軽車両通行止め」である。", "この標識は「自動車以外の通行止め」である。"],
    "answer": 3,
    "img": "img/image28.png",
    "commentary": "リヤカー、荷車など自転車以外の軽車両は通行できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識がある場所では、自転車は通行できない。", "この標識がある場所では、軽車両は通行できない。", "この標識は、二人乗りの禁止を表す。", "この標識は、自転車の駐輪禁止を表す。"],
    "answer": 1,
    "img": "img/image29.png",
    "commentary": "自転車は通行できません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識のある場所を自転車（普通自転車）で通行できる。", "この標識は「通行止め」である。", "この標識は「走行注意」である。", "この標識は、事故の抑制のため用いられる。"],
    "answer": 1,
    "img": "img/image30.png",
    "commentary": "標識に表示されている車両は通行できません。この場合は、自動車と原動機付自転車は通行することができません。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は自転車の二人乗りを注意している。", "この標識がある場所では、自転車の二人乗りはできない。", "原動機付自転車は、この標識のある場所を通行することができない。", "この標識がある場所では、自動二輪車の二人乗り通行ができない。"],
    "answer": 4,
    "img": "img/image31.png",
    "commentary": " 大型自動二輪車・普通自動二輪車の二人乗り通行ができません。（側車付のものを除く） "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は前方にロータリーがあることを表している。", "この標識は転回注意を表している。", "この標識はUターン注意を表している。", "この標識は急カーブがあることを表している。"],
    "answer": 1,
    "img": "img/image32.png",
    "commentary": " 前方にロータリーがあることを示しています。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は前方に安全地帯があることを示している。", "この標識は十形道路交差点があることを示している。", "この標識は横断歩道があることを示している。", "この標識は休憩所があることを示している。"],
    "answer": 1,
    "img": "img/image33.png",
    "commentary": "前方に十形道路交差点があることを示しています。 "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は、一方通行の入口を表しており、車は逆方向から進入できない。", "この標識は、指定方向外進行禁止（左折・右折禁止）を表す。", "この標識は、速度一定を表す。", "この標識のある場所では、車線変更ができない。"],
    "answer": 2,
    "img": "img/image34.png",
    "commentary": "車は矢印の方向以外に進行してはいけません。 "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は通行中の道路の方が道幅が広いことを示している。", "この標識は通行中の道路の方が車線が多いことを示している。", "この標識は通行中の道路の方が速度を出せることを示している。", "この標識は通行中の道路の方が優先道路ということを示している。"],
    "answer": 4,
    "img": "img/image35.png",
    "commentary": "標識の道路が優先道路であることを示しています。 "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は自転車道や自転車専用道路であることを表している。", "この標識は自転車優先道路であることを表している。", "この標識は自転車が並んで通行できることを表している。", "この標識は自転車の横断が可能であることを表している。"],
    "answer": 3,
    "img": "img/image36.png",
    "commentary": "自転車（普通自転車）が並んで通行することができることを示しています。 "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は車が停車できることを示している。", "この標識は車が駐車できることを示している。", "この標識はサービスエリアがあることを示している。", "この標識は通行可能であることを示している。"],
    "answer": 2,
    "img": "img/image37.png",
    "commentary": "この図は車が停車できることを示す指示標識である。"
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["これは右折禁止の標識である。", "この標識は指定方向外進行禁止を示す。", "この標識は合流の禁止を示す。", "これは車両横断禁止の標識である。"],
    "answer": 4,
    "img": "img/image38.png",
    "commentary": "車は横断してはいけません。（道路外の施設や場所に出入りするための左折をともなう横断はできます） "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識のある場所では、車は転回することができない。", "この標識は、右折禁止を示す。", "この標識のある場所では、逆方向の通行ができない。", "この標識は、後退の禁止を示す。"],
    "answer": 1,
    "img": "img/image39.png",
    "commentary": "車は転回することができません。 "
  },
  {
    "statement": "標識の意味として正しいものは下のうちどれか。",
    "choices": ["この標識は、「急カーブあり」である。", "この標識がある場所では、右側部分にはみ出さなければ追い越しができる。", "この標識は「追い越し禁止」である。", "この標識がある場所では、緊急時のみ追い越しができる。"],
    "answer": 2,
    "img": "img/sign40.png",
    "commentary": "車は追い越しのために道路の右側部分にはみ出して通行してはいけません。（右側部分にはみ出さない追い越しはできます） "
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["表示された車両のみが通行できる", "原動機付自動車は通行することができる", "軽車両は通行することができる", "表示された車両が優先される通行帯である"],
    "answer": 0,
    "img": "img/image41.png",
    "commentary": "標識に表示された車の専用通行帯であることを示しています。（この場合路線バス等の専用通行帯）"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["原動機付自動車は二段階右折をすることができる", "原動機付自動車は二段階月右折をしなければならない", "原動機付自動車は二段階右折をしてはいけない", "原動機付自動車は通行することができる"],
    "answer": 1,
    "img": "img/image42.png",
    "commentary": "原動機付自転車は右折する時に、交差点の側端に沿って通行し、二段階右折しなければなりません。（小回り右折することはできません）"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["原動機付自動車は二段階右折をすることができる", "原動機付自動車は二段階月右折をしなければならない", "原動機付自動車は二段階右折をしてはいけない", "原動機付自動車は通行することができる"],
    "answer": 2,
    "img": "img/image43.png",
    "commentary": "原動機付自転車は右折するときにあらかじめ道路の中央（一方通行の場合は右端）に寄って右折する小回り右折しなければなりません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この場所でうるさく騒いではいけない", "今場所では警笛を鳴らさなければいけない", "この場所ではヘッドライトをつけなければならない", "この場所では、周りが明るいときは警笛を鳴らさなくてもよい"],
    "answer": 1,
    "img": "img/image44.png",
    "commentary": "車と路面電車が警音器を鳴らさなければならない場所であることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この場所では外が明るければ徐行しなくてもよい", "この場所では、見晴らしがよければ徐行しなくてもよい", "この場所では霧がかかっていなければ徐行しなくてもよい", "この場所では徐行しなければならない"],
    "answer": 3,
    "img": "img/image45.png",
    "commentary": "車と路面電車は徐行（すぐに停止できる速度で通行）しなければなりません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この場所では外が明るければ止まらなくてもよい", "この場所では、見晴らしがよければ止まらなくてもよい", "この場所では霧がかかっていなければ止まらなくてもよい", "この場所では止まらなければならない"],
    "answer": 1,
    "img": "img/image46.png",
    "commentary": "車と路面電車は停止線の直前で一時停止しなければなりません。停止線がないときは交差点（標識）の手前で一時停止しなければなりません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この場所が線路であることを示している", "普通自動車は通行することができる", "大型自動車は通行することができる", "この図は自動車専用の標識で、高速自動車道または自動車専用道路であることを示している"],
    "answer": 0,
    "img": "img/image47.png",
    "commentary": "自動車が軌道敷内を通行できることを表しています。（補助標識で指定がある場合は指定された自動車に限り通行できます）"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この場所では駐車可能であることを示している", "この場所が駐車場であることを示している", "この場所にコインパーキングがあることを示している", "この場所にトイレがあることを示している"],
    "answer": 1,
    "img": "img/image48.png",
    "commentary": "車は駐車することができます。この標識は停車可の標識と似ているので注意が必要です。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["矢印の方向に風が吹いていることを示している", "横断歩道であることを示している", "標識の道路が優先道路であることを示しています", "この標識は交差する前方の道路が優先道路であることを示している"],
    "answer": 2,
    "img": "img/image49.png",
    "commentary": "標識の道路が優先道路であることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["車は通行できない", "ここから区間が始まることを示している", "この標識は道路の中央もしくは中央線を示す標識である。", "ここまでで区間が終わることを示している"],
    "answer": 0,
    "img": "img/image50.png",
    "commentary": "歩行者の安全地帯を示しており、車の通行はできません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["歩行者は横断できる", "原動機付自動車は通行することができる", "車は通行することができない", "歩行者が優先される通行帯である"],
    "answer": 1,
    "img": "img/image51.png",
    "commentary": "歩行者の通行ができないことを示しています。車（車両）の通行はできます。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["歩行者は通行できる", "歩行者は横断することができない", "車が通っていないときは歩行者は横断することができる", "歩行者が優先される通行帯である"],
    "answer": 1,
    "img": "img/image52.png",
    "commentary": "歩行者は横断してはいけないことを表しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["自転車は並んで通行できる", "原動機付自動車は並んで通行できる", "普通自動車は並んで通行できる", "自転車道や自転車専用道路であることを表している。"],
    "answer": 1,
    "img": "img/image53.png",
    "commentary": "自転車（普通自転車）が並んで通行することができることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この標識で示されている中央線は必ず道路の中央にある。", "道路の中央にあるとは限らない", "この場所では車線変更をしてはならない", "この場所では速度を落とさなければならない"],
    "answer": 1,
    "img": "img/image54.png",
    "commentary": "標識の位置が道路の中央や中央線であることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["この先に学校があることを示している", "この先に幼稚園があることを示している", "この先に保育所があるということを示している", "横断歩道であることを示している"],
    "answer": 3,
    "img": "img/image55.png",
    "commentary": "横断歩道であることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["自転車の横断帯を示しています", "普通自動車は通行することができる", "自転車専用の通行帯であることを示している", "この標識は、自転車道や自転車専用道路であることを示している"],
    "answer": 0,
    "img": "img/image56.png",
    "commentary": "自転車の横断帯を示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["横断歩道・自転車横断帯を示しています", "普通自動車は通行することができる", "自転車専用の通行帯であることを示している", "この標識は、自転車道や自転車専用道路であることを示している"],
    "answer": 0,
    "img": "img/image57.png",
    "commentary": "横断歩道と自転車横断帯であることを示しています。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["特定の種類の車両の高速自動車国道での通行区分を示す標識である", "この場所が駐車場であることを示している", "車は矢印の方向に進まなければならない", "けん引自動車の通行区分を示しています"],
    "answer": 3,
    "img": "img/image58.png",
    "commentary": "けん引自動車の高速自動車国道の通行区分を示しています。けん引自動車は標識に表示された通行区分に従って通行しなければなりません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["表示された車両のみが通行できる", "原動機付自動車は通行することができる", "軽車両は通行することができる", "表示された車両が優先される通行帯である"],
    "answer": 3,
    "img": "img/image59.png",
    "commentary": "路線バスなどの優先通行帯を示しており、路線バスなどが接近してきた場合には、小型特殊自動車や原動機付自転車、小型特殊自動車以外の車は他の通行帯に移らなければなりません。"
  },
  {
    "statement": "標識の意味をして正しいものは下のうちどれか。",
    "choices": ["交差点で進行する方向別の通行区分を示しています。", "真ん中の車線から右折することができる", "この標識がある場所では車線変更はできない", "左側の車線では右折が可能である"],
    "answer": 0,
    "img": "img/image60.png",
    "commentary": "交差点で進行する方向別の通行区分を示しています。"
  }
];

const training = [
  {
    "explain": "踏切あり",
    "img": "img/image1.png"
  },
  {
    "explain": "踏切あり",
    "img": "img/image2.png"
  },
  {
    "explain": "学校、幼稚園、保育所等あり",
    "img": "img/image3.png"
  },
  {
    "explain": "信号機あり",
    "img": "img/image4.png"
  },
  {
    "explain": "すべりやすい",
    "img": "img/image5.png"
  },
  {
    "explain": "落石のおそれあり",
    "img": "img/image6.png"
  },
  {
    "explain": "路面凹凸あり",
    "img": "img/image7.png"
  },
  {
    "explain": "合流交通あり",
    "img": "img/image8.png"
  },
  {
    "explain": "車線数減少",
    "img": "img/image9.png"
  },
  {
    "explain": "幅員減少",
    "img": "img/image10.png"
  },
  {
    "explain": "駐停車禁止",
    "img": "img/image11.png"
  },
  {
    "explain": "駐車禁止",
    "img": "img/image12.png"
  },
  {
    "explain": "危険物積載車両通行止め",
    "img": "img/image13.png"
  },
  {
    "explain": "自転車専用",
    "img": "img/image14.png"
  },
  {
    "explain": "自転車および歩行者専用",
    "img": "img/image15.png"
  },
  {
    "explain": "歩行者専用",
    "img": "img/image16.png"
  },
  {
    "explain": "高さ制限",
    "img": "img/image17.png"
  },
  {
    "explain": "最大幅",
    "img": "img/image18.png"
  },
  {
    "explain": "最高速度",
    "img": "img/image19.png"
  },
  {
    "explain": "一方通行",
    "img": "img/image20.png"
  },
  {
    "explain": "通行止め",
    "img": "img/image21.png"
  },
  {
    "explain": "車両通行止め",
    "img": "img/image22.png"
  },
  {
    "explain": "車両進入禁止",
    "img": "img/image23.png"
  },
  {
    "explain": "二輪の自動車以外の自動車通行止め",
    "img": "img/image24.png"
  },
  {
    "explain": "大型貨物自動車等通行止め",
    "img": "img/image25.png"
  },
  {
    "explain": "大型乗用自動車等通行止め",
    "img": "img/image26.png"
  },
  {
    "explain": "二輪の自動車・原動機付自転車通行止め",
    "img": "img/image27.png"
  },
  {
    "explain": "自転車以外の軽車両通行止め",
    "img": "img/image28.png"
  },
  {
    "explain": "自転車通行止め",
    "img": "img/image29.png"
  },
  {
    "explain": "車両通行止め",
    "img": "img/image30.png"
  },
  {
    "explain": "大型自動二輪車及び普通自動二輪車二人乗り通行禁止",
    "img": "img/image31.png"
  },
  {
    "explain": "ロータリーあり",
    "img": "img/image32.png"
  },
  {
    "explain": "十型道路交差点あり",
    "img": "img/image33.png"
  },
  {
    "explain": "指定方向外通行禁止",
    "img": "img/image34.png"
  },
  {
    "explain": "優先道路",
    "img": "img/image35.png"
  },
  {
    "explain": "並進可",
    "img": "img/image36.png"
  },
  {
    "explain": "駐車可",
    "img": "img/image37.png"
  },
  {
    "explain": "車両横断禁止",
    "img": "img/image38.png"
  },
  {
    "explain": "転回禁止",
    "img": "img/image39.png"
  },
  {
    "explain": "追い越しのための右側部分はみ出し通行禁止",
    "img": "img/image40.png"
  },
  {
    "explain": "専用通行帯",
    "img": "img/image41.png"
  },
  {
    "explain": "原動機付自転車車の右折方法（二段階）",
    "img": "img/image42.png"
  },
  {
    "explain": "原動機付自転車車の右折方法（小回り）",
    "img": "img/image43.png"
  },
  {
    "explain": "警笛鳴らせ",
    "img": "img/image44.png"
  },
  {
    "explain": "徐行",
    "img": "img/image45.png"
  },
  {
    "explain": "一時停止",
    "img": "img/image46.png"
  },
  {
    "explain": "軌道敷内通行可",
    "img": "img/image47.png"
  },
  {
    "explain": "駐車可",
    "img": "img/image48.png"
  },
  {
    "explain": "優先道路",
    "img": "img/image49.png"
  },
  {
    "explain": "安全地帯",
    "img": "img/image50.png"
  },
  {
    "explain": "歩行者通行止め",
    "img": "img/image51.png"
  },
  {
    "explain": "歩行者横断禁止",
    "img": "img/image52.png"
  },
  {
    "explain": "並進可",
    "img": "img/image53.png"
  },
  {
    "explain": "中央線",
    "img": "img/image54.png"
  },
  {
    "explain": "横断歩道",
    "img": "img/image55.png"
  },
  {
    "explain": "自転車横断帯",
    "img": "img/image56.png"
  },
  {
    "explain": "横断歩道・自転車横断帯",
    "img": "img/image57.png"
  },
  {
    "explain": "牽引自動車の自動車専用道路第一通行帯通行指定区間",
    "img": "img/image58.png"
  },
  {
    "explain": "路線バス等優先通行帯",
    "img": "img/image59.png"
  },
  {
    "explain": "進行方向別通行区分",
    "img": "img/image60.png"
  }
];
