const bandInfo = {
  1: { name: "Poppin'Party", color: "#ff5aa8", logo: "https://bestdori.com/assets/jp/band/logo/001_rip/logoL.png" },
  2: { name: "Afterglow", color: "#d7354f", logo: "https://bestdori.com/assets/jp/band/logo/002_rip/logoL.png" },
  3: { name: "Hello, Happy World!", color: "#ffd166", logo: "https://bestdori.com/assets/jp/band/logo/003_rip/logoL.png" },
  4: { name: "Pastel＊Palettes", color: "#ff9dc8", logo: "https://bestdori.com/assets/jp/band/logo/004_rip/logoL.png" },
  5: { name: "Roselia", color: "#5450b8", logo: "https://bestdori.com/assets/jp/band/logo/005_rip/logoL.png" },
  18: { name: "RAISE A SUILEN", color: "#31d59b", logo: "https://bestdori.com/assets/jp/band/logo/018_rip/logoL.png" },
  21: { name: "Morfonica", color: "#7bdcff", logo: "https://bestdori.com/assets/jp/band/logo/021_rip/logoL.png" },
  45: { name: "MyGO!!!!!", color: "#5b8cff", logo: "https://bestdori.com/assets/jp/band/logo/045_rip/logoL.png" }
};

const characters = [
  ["c01", "户山 香澄", 1, "res001062", [5,2,3,2,4,5,2,3], "闪闪发光的行动派"],
  ["c02", "花园 多惠", 1, "res002054", [3,3,2,4,2,4,4,3], "自由又专注的灵感型吉他手"],
  ["c03", "牛込 里美", 1, "res003063", [2,1,4,2,5,3,2,1], "温柔细腻的治愈系同伴"],
  ["c04", "山吹 沙绫", 1, "res004062", [3,2,3,4,5,3,4,2], "可靠温暖的支撑者"],
  ["c05", "市谷 有咲", 1, "res005069", [2,3,3,4,3,2,4,3], "嘴硬但很会照顾全局"],
  ["c06", "美竹 兰", 2, "res006069", [3,5,1,4,3,3,3,5], "坚持自我步调的摇滚核心"],
  ["c07", "青叶 摩卡", 2, "res007059", [2,3,3,3,3,3,5,4], "松弛却敏锐的观察者"],
  ["c08", "上原 绯玛丽", 2, "res008066", [4,2,5,2,5,3,2,2], "热情外放的气氛协调者"],
  ["c09", "宇田川 巴", 2, "res009055", [5,4,2,4,4,2,3,4], "爽朗有担当的鼓动力"],
  ["c10", "羽泽 鸫", 2, "res010050", [3,2,4,4,5,3,4,2], "踏实努力的日常守护者"],
  ["c11", "弦卷 心", 3, "res011069", [5,2,4,1,5,5,1,5], "把快乐当作使命的太阳"],
  ["c12", "濑田 薰", 3, "res012059", [4,4,4,3,4,5,3,5], "戏剧感十足的浪漫派"],
  ["c13", "北泽 育美", 3, "res013064", [5,2,4,3,5,4,2,4], "元气满格的直球伙伴"],
  ["c14", "松原 花音", 3, "res014052", [2,1,4,3,5,3,3,1], "柔软害羞但很温暖"],
  ["c15", "米歇尔", 3, "res015070", [3,4,2,5,4,2,5,3], "清醒吐槽役与幕后稳定器"],
  ["c16", "丸山 彩", 4, "res016053", [4,2,5,4,4,5,2,2], "努力发光的偶像型人格"],
  ["c17", "冰川 日菜", 4, "res017060", [5,4,3,5,2,4,2,5], "天才直觉与好奇心并行"],
  ["c18", "白鹭 千圣", 4, "res018045", [3,5,4,5,3,3,5,2], "成熟得体的专业派"],
  ["c19", "大和 麻弥", 4, "res019068", [3,3,3,5,4,3,4,2], "技术宅式的认真可靠"],
  ["c20", "若宫 伊芙", 4, "res020072", [4,3,4,3,5,5,3,4], "真诚热血的武士道信徒"],
  ["c21", "凑 友希那", 5, "res021052", [2,5,1,5,2,4,4,3], "高标准的目标主义者"],
  ["c22", "冰川 纱夜", 5, "res022068", [2,5,1,5,2,3,5,2], "严格克制的精度追求者"],
  ["c23", "今井 莉莎", 5, "res023069", [4,3,4,3,5,3,4,2], "温柔成熟的关系润滑剂"],
  ["c24", "宇田川 亚子", 5, "res024064", [5,3,4,3,4,5,2,5], "中二幻想与热情并存"],
  ["c25", "白金 燐子", 5, "res025064", [1,3,3,5,4,4,4,1], "安静深厚的内在表达者"],
  ["c26", "仓田 真白", 21, "res026022", [2,2,3,3,4,5,2,1], "敏感又想把声音传出去"],
  ["c27", "桐谷 透子", 21, "res027030", [5,3,5,2,3,4,2,4], "爱漂亮也爱向前冲"],
  ["c28", "广町 七深", 21, "res028027", [3,4,3,4,3,3,5,4], "普通外表下的特别脑回路"],
  ["c29", "二叶 筑紫", 21, "res029023", [4,2,4,4,5,4,3,2], "认真小队长式的责任感"],
  ["c30", "八潮 瑠唯", 21, "res030031", [2,5,1,5,2,3,5,2], "理性冷静的高完成度派"],
  ["c31", "和奏 瑞依", 18, "res031032", [3,4,2,5,4,3,5,2], "稳健专业的低频核心"],
  ["c32", "朝日 六花", 18, "res032029", [4,3,3,5,4,4,3,3], "憧憬驱动的努力型吉他手"],
  ["c33", "佐藤 益木", 18, "res033030", [4,4,2,4,5,2,3,4], "外硬内软的强力鼓手"],
  ["c34", "鳰原 令王那", 18, "res034014", [4,3,5,4,4,4,3,3], "可爱包装下的高执行力"],
  ["c35", "珠手 知由", 18, "res035024", [3,5,3,5,2,5,3,5], "野心明确的制作人气质"],
  ["c36", "高松 灯", 45, "res036004", [1,2,2,3,5,5,2,1], "笨拙真诚的歌词灵魂"],
  ["c37", "千早 爱音", 45, "res037004", [4,3,4,2,3,4,3,4], "想被看见也愿意努力"],
  ["c38", "要 乐奈", 45, "res038005", [3,4,2,5,2,3,3,5], "随心所欲的野性天赋"],
  ["c39", "长崎 爽世", 45, "res039004", [3,4,4,4,4,3,5,2], "温柔表面下的复杂协调者"],
  ["c40", "椎名 立希", 45, "res040005", [2,5,1,5,3,3,4,4], "锋利认真又很重情义"]
].map(([key, name, bandId, res, traits, tagline]) => {
  const band = bandInfo[bandId];
  return {
    key,
    name,
    band: band.name,
    bandId,
    color: band.color,
    logo: band.logo,
    image: `https://bestdori.com/assets/jp/characters/resourceset/${res}_rip/trim_after_training.png`,
    gradient: `linear-gradient(135deg, ${band.color}, #ffffff)`,
    traits,
    tagline
  };
});

const traitLabels = ["热情", "酷感", "可爱", "专业", "共情", "梦想", "冷静", "突破"];

const questions = [
  q("排练前多出一小时，你会怎么用？", [
    ["先把想试的段落弹起来，灵感来了就要抓住。", [5,2,2,2,2,4,1,4]],
    ["拆开薄弱段落反复练，直到能稳定复现。", [1,4,1,5,1,3,5,1]],
    ["确认大家状态，顺便聊聊有没有烦恼。", [2,1,3,2,5,2,4,1]],
    ["研究造型、表情和舞台动线，让演出完整。", [3,3,5,4,3,4,3,2]]
  ]),
  q("朋友突然邀请你参加陌生活动，你的第一反应是？", [
    ["听起来很闪耀，先答应再说。", [5,1,3,1,3,5,1,5]],
    ["问清楚流程和目的，合理就去。", [1,4,1,5,2,2,5,1]],
    ["有点紧张，但熟人陪着就愿意试试。", [1,1,4,2,5,3,2,1]],
    ["会判断它会不会影响原本安排。", [2,4,2,4,3,2,5,2]]
  ]),
  q("Live 中发生小失误，你更可能？", [
    ["用笑容和气势把气氛接回来。", [5,2,4,2,5,4,1,5]],
    ["快速判断问题，稳住节奏继续推进。", [2,5,1,5,2,2,5,2]],
    ["心里慌一下，但跟着同伴的声音继续。", [1,1,3,2,5,4,2,1]],
    ["不表现出来，演完后认真复盘。", [1,4,1,5,2,2,5,2]]
  ]),
  q("你最喜欢哪一种歌词？", [
    ["直接、热烈、让人想奔跑。", [5,2,3,1,3,5,1,4]],
    ["贴近日常，写熟悉的人和街道。", [3,2,3,2,5,3,4,2]],
    ["不完美但真诚，像把心事慢慢说出来。", [1,2,2,3,5,5,2,1]],
    ["有戏剧感和象征性，越品越有层次。", [2,5,2,4,2,5,4,4]]
  ]),
  q("面对长期目标，你的节奏是？", [
    ["每天一点点努力，靠近憧憬。", [3,2,4,4,4,5,3,2]],
    ["设定高标准，不达标就继续磨。", [1,5,1,5,1,4,5,2]],
    ["靠热情开路，边跑边找答案。", [5,2,3,2,3,5,1,5]],
    ["先保证自己和团队都能持续下去。", [2,3,2,4,5,2,5,1]]
  ]),
  q("如果要设计一次主题演出，你会选择？", [
    ["游乐园、彩带、惊喜机关。", [5,1,5,1,5,5,1,5]],
    ["深色灯光、强叙事、仪式感。", [2,5,1,5,2,5,4,4]],
    ["校园天台、夕阳、朋友一起唱。", [3,3,2,3,5,3,4,2]],
    ["童话、蝴蝶、透明感和弦乐。", [2,2,4,4,4,5,3,1]]
  ]),
  q("别人夸你时，你最像哪种反应？", [
    ["开心到立刻想分享出去。", [5,1,5,1,5,4,1,3]],
    ["客气收下，心里记着继续努力。", [2,2,4,5,4,4,4,1]],
    ["更在意下次能不能做得更好。", [1,5,1,5,2,3,5,2]],
    ["不好意思，可能不知道怎么回。", [1,1,3,3,5,3,3,1]]
  ]),
  q("队友意见冲突时，你会？", [
    ["先让大家说出真正想要的东西。", [2,2,2,3,5,3,5,1]],
    ["直接点出核心问题。", [2,5,1,5,2,2,4,4]],
    ["提出一个让大家笑出来的新方案。", [5,2,5,1,5,5,1,5]],
    ["观察气氛，选最不伤人的说法。", [2,3,4,4,5,2,5,1]]
  ]),
  q("你的日常能量来源更接近？", [
    ["新鲜事、舞台、朋友的欢呼。", [5,2,4,2,4,5,1,4]],
    ["完成清单和稳定进步。", [1,4,1,5,2,2,5,1]],
    ["熟悉的人、熟悉的地方、安静默契。", [2,2,3,3,5,2,5,1]],
    ["独处时冒出来的想象和文字。", [1,3,2,3,4,5,3,2]]
  ]),
  q("如果今天心情低落，你会怎么恢复？", [
    ["找朋友待一会儿，哪怕只是吃东西。", [3,2,4,2,5,2,3,1]],
    ["把情绪写下来，慢慢整理。", [1,2,2,3,5,5,4,1]],
    ["换上舞台模式，用行动带回状态。", [4,4,4,4,2,4,2,4]],
    ["做一件能让别人开心的事。", [5,1,4,1,5,4,1,4]]
  ]),
  q("你对“完美”的看法是？", [
    ["值得追求，因为音乐要抵达理想。", [1,5,1,5,1,4,5,2]],
    ["重要，但团队能一起走下去也重要。", [2,3,2,4,5,3,5,1]],
    ["会努力靠近，也接受跌跌撞撞的自己。", [3,2,4,4,4,5,2,2]],
    ["比起完美，更想留下真实心情。", [1,2,2,3,5,5,2,1]]
  ]),
  q("你更容易被哪种角色吸引？", [
    ["像太阳一样把大家照亮的人。", [5,1,4,1,5,5,1,4]],
    ["冷静、强大、有明确目标的人。", [1,5,1,5,1,3,5,2]],
    ["努力但会紧张，让人想加油的人。", [2,1,5,4,5,4,2,1]],
    ["安静却有强烈内心世界的人。", [1,3,2,4,4,5,4,1]]
  ]),
  q("临时要你上台发言，你会？", [
    ["紧张，但把准备好的话认真说完。", [1,2,3,4,4,3,3,1]],
    ["深呼吸，然后直接切入重点。", [2,5,1,5,2,2,5,2]],
    ["即兴发挥，说不定效果更好。", [5,3,4,2,3,4,1,5]],
    ["用漂亮表达控制现场节奏。", [3,5,4,5,3,3,4,2]]
  ]),
  q("你选择队友时最看重？", [
    ["能不能一起开心地创造回忆。", [5,1,4,1,5,5,1,4]],
    ["有没有共同目标和专业态度。", [1,5,1,5,2,4,5,2]],
    ["是不是能理解彼此的沉默。", [1,3,2,3,5,3,5,1]],
    ["能不能互相鼓励着变得更好。", [3,2,4,4,5,4,3,2]]
  ]),
  q("你更像哪种练习方式？", [
    ["重复基础，直到身体记住。", [1,4,1,5,2,2,5,1]],
    ["录下来回看，修表情和细节。", [2,4,5,5,3,3,4,1]],
    ["跟着感觉试，捕捉突然出现的灵感。", [4,3,3,3,2,5,2,5]],
    ["和固定伙伴一起磨合默契。", [3,2,3,4,5,3,4,1]]
  ]),
  q("你最想拥有哪种舞台灯光？", [
    ["粉色和金色，像烟花一样炸开。", [5,1,5,1,4,5,1,4]],
    ["蓝紫色聚光，安静但压迫感强。", [1,5,1,5,2,4,5,2]],
    ["夕阳红与暗色背光，有街头感。", [3,5,1,4,3,2,4,4]],
    ["浅蓝、白光和飘动薄纱。", [2,2,4,4,4,5,3,1]]
  ]),
  q("有人说你的想法太大胆，你会？", [
    ["更兴奋了，说明它够有趣。", [5,2,4,1,3,5,1,5]],
    ["解释它为什么能实现，并拿出方案。", [2,5,1,5,2,3,5,2]],
    ["先试试看，失败了也有收获。", [5,2,3,3,3,4,2,5]],
    ["开始怀疑，但还是想把它写下来。", [1,2,2,3,4,5,3,1]]
  ]),
  q("你在团队里的隐藏功能是？", [
    ["气氛发动机。", [5,1,4,1,5,4,1,4]],
    ["质量控制器。", [1,5,1,5,2,3,5,1]],
    ["情绪接收器。", [1,2,2,3,5,4,4,1]],
    ["现实提醒器。", [2,4,1,5,3,2,5,2]]
  ]),
  q("遇到陌生人，你通常？", [
    ["很快就能搭上话。", [5,2,4,2,4,4,1,4]],
    ["保持礼貌，慢慢观察。", [2,4,3,4,3,2,5,1]],
    ["有点拘谨，需要时间适应。", [1,1,3,3,5,3,3,1]],
    ["不刻意热络，但熟了很可靠。", [2,3,2,4,5,2,5,1]]
  ]),
  q("你觉得一首歌最重要的是？", [
    ["让人一听就想跟着跳起来。", [5,1,4,1,4,4,1,4]],
    ["技术、完成度和情绪张力都在线。", [1,5,1,5,2,4,5,2]],
    ["把说不清的心情准确传出去。", [1,2,2,4,5,5,3,1]],
    ["有记忆点，也有能被喜欢上的可爱感。", [4,2,5,3,4,4,2,2]]
  ]),
  q("你被安排当队长时，会先做什么？", [
    ["喊大家一起定一个闪亮目标。", [5,2,3,2,4,5,1,4]],
    ["制定标准，明确每个人负责的部分。", [1,5,1,5,2,3,5,1]],
    ["确认大家有没有跟上，有没有不安。", [2,2,3,4,5,3,4,1]],
    ["想一个让大家笑着参与的计划。", [5,1,5,2,5,4,1,4]]
  ]),
  q("你最受不了哪种情况？", [
    ["明明可以更好，却没人认真对待。", [1,5,1,5,1,3,5,3]],
    ["朋友之间明明有话却不说。", [2,3,2,3,5,3,4,2]],
    ["气氛一直很沉，大家都不开心。", [5,1,4,1,5,4,1,4]],
    ["被突然推到人群中央。", [1,1,3,3,4,3,3,1]]
  ]),
  q("你喜欢的服装风格更接近？", [
    ["明亮活泼，有星星或彩带。", [5,1,5,1,4,4,1,4]],
    ["帅气简洁，有一点摇滚感。", [3,5,1,4,2,2,4,4]],
    ["甜美精致，适合镜头前表现。", [4,2,5,4,3,4,2,2]],
    ["神秘戏剧化，带一点面具感。", [2,5,2,4,2,5,4,4]]
  ]),
  q("收到困难任务时，你内心的声音是？", [
    ["好，来吧，正好突破。", [4,5,2,5,2,4,3,5]],
    ["我可能不行，但想试着做到。", [1,1,3,4,5,4,3,1]],
    ["这会不会变得很好玩？", [5,2,4,1,3,5,1,5]],
    ["只要大家在一起，应该能过去。", [3,2,3,3,5,3,4,1]]
  ]),
  q("你更适合哪种社交距离？", [
    ["越热闹越有能量。", [5,1,4,1,4,4,1,4]],
    ["小圈子、老朋友、长期稳定。", [2,3,2,4,5,2,5,1]],
    ["能亲近，但需要保留独处空间。", [1,3,2,4,4,4,4,1]],
    ["看场合切换，必要时很得体。", [3,5,4,5,3,3,5,2]]
  ]),
  q("如果要写一句代表你的台词，会是？", [
    ["一起寻找闪闪发光的声音吧！", [5,1,4,2,4,5,1,4]],
    ["和平时一样，就是最好的我们。", [3,3,2,4,5,2,5,2]],
    ["我会努力成为真正闪耀的人。", [3,2,5,4,4,5,2,2]],
    ["音乐必须抵达更高的地方。", [1,5,1,5,1,4,5,2]]
  ]),
  q("你最容易在什么时候变勇敢？", [
    ["看到别人因为我露出笑容。", [5,1,4,2,5,4,1,4]],
    ["有人相信我的声音。", [1,2,2,4,5,5,3,1]],
    ["同伴需要我稳住现场。", [2,4,2,5,5,2,5,1]],
    ["梦想离我很近的时候。", [4,3,4,4,3,5,2,3]]
  ]),
  q("你处理压力的方式是？", [
    ["把压力转化成更严格的训练。", [1,5,1,5,1,3,5,2]],
    ["表面维持状态，私下慢慢消化。", [2,4,3,4,3,2,5,1]],
    ["找可信的人待一会儿。", [2,2,3,3,5,2,4,1]],
    ["先让自己忙起来，不被低气压追上。", [4,2,4,3,3,3,2,3]]
  ]),
  q("你心里的“好乐队”是什么样？", [
    ["像家一样，吵吵闹闹但总会聚在一起。", [4,2,3,2,5,3,3,2]],
    ["能用音乐正面证明自己的强队。", [2,5,1,5,2,4,4,3]],
    ["让观众带着笑容回家的队伍。", [5,1,5,1,5,4,1,4]],
    ["每个人都不完整，却仍然一起发声。", [1,2,2,3,5,5,3,1]]
  ]),
  q("最后一题：站上舞台前，你最想对自己说？", [
    ["别怕，去把喜欢的心情唱出来。", [2,1,3,3,5,5,2,1]],
    ["今天也要让大家看见我的努力。", [3,2,5,4,4,5,2,2]],
    ["专注，完成这场演出。", [1,5,1,5,2,3,5,1]],
    ["让全场一起笑起来吧！", [5,1,5,1,5,4,1,5]]
  ])
];

const state = {
  index: 0,
  answers: Array(questions.length).fill(null)
};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const comboCount = document.getElementById("comboCount");
const progressBar = document.getElementById("progressBar");
const optionsWrap = document.getElementById("options");
const resultCard = document.getElementById("resultCard");
const ranking = document.getElementById("ranking");
const heroCharacters = document.getElementById("heroCharacters");

function q(text, options) {
  return { text, options: options.map(([label, vector]) => ({ label, vector })) };
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(item => item.classList.remove("active"));
  screen.classList.add("active");
}

function renderHeroAssets() {
  const picks = [0, 6, 15, 21, 26, 30, 35, 39];
  heroCharacters.innerHTML = picks.map((index, slot) => {
    const character = characters[index];
    return `
      <span class="avatar hero-avatar hero-avatar-${slot}" style="background:${character.gradient}">
        <img src="${character.image}" alt="${character.name}立绘">
      </span>
    `;
  }).join("");

}

function renderQuestion() {
  const question = questions[state.index];
  questionNumber.textContent = String(state.index + 1).padStart(2, "0");
  questionText.textContent = question.text;
  comboCount.textContent = state.answers.filter(answer => answer !== null).length;
  progressBar.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  prevBtn.disabled = state.index === 0;
  nextBtn.textContent = state.index === questions.length - 1 ? "查看结果" : "下一题";
  nextBtn.disabled = state.answers[state.index] === null;

  optionsWrap.innerHTML = "";
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option-card";
    if (state.answers[state.index] === optionIndex) {
      button.classList.add("selected");
    }
    button.type = "button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + optionIndex)}. ${option.label}</strong>`;
    button.addEventListener("click", () => {
      state.answers[state.index] = optionIndex;
      renderQuestion();
    });
    optionsWrap.appendChild(button);
  });
}

function calculateScores() {
  const userVector = Array(traitLabels.length).fill(0);
  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    questions[questionIndex].options[answerIndex].vector.forEach((value, index) => {
      userVector[index] += value;
    });
  });

  const userNorm = Math.hypot(...userVector) || 1;
  return characters
    .map((character, index) => {
      const dot = character.traits.reduce((sum, value, traitIndex) => sum + value * userVector[traitIndex], 0);
      const charNorm = Math.hypot(...character.traits) || 1;
      const tieBreak = ((index * 17) % 13) / 1000;
      return { ...character, value: dot / (userNorm * charNorm) + tieBreak };
    })
    .sort((a, b) => b.value - a.value);
}

function strongestTraits(character) {
  return character.traits
    .map((value, index) => ({ label: traitLabels[index], value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map(item => item.label)
    .join(" / ");
}

function renderResult() {
  const scores = calculateScores();
  const top = scores[0];
  const maxScore = Math.max(top.value, 0.01);

  resultCard.innerHTML = `
    <div class="result-avatar" style="background:${top.gradient}">
      <img src="${top.image}" alt="${top.name}立绘">
    </div>
    <div class="result-copy">
      <h3>${top.name}</h3>
      <span class="band-name" style="background:${top.color}">
        <img src="${top.logo}" alt="${top.band} logo">
      </span>
      <p>${top.tagline}。你的高分关键词是 ${strongestTraits(top)}，说明你在舞台选择、团队关系和压力反应上很接近 ${top.name} 的气质。</p>
    </div>
  `;

  ranking.innerHTML = scores.map((item, index) => {
    const percent = Math.max(1, Math.round((item.value / maxScore) * 100));
    return `
      <div class="rank-row">
        <span class="rank-index">${String(index + 1).padStart(2, "0")}</span>
        <img class="rank-logo" src="${item.logo}" alt="${item.band} logo">
        <strong>${item.name}</strong>
        <span class="rank-bar"><i style="--score:${percent}%"></i></span>
        <span class="rank-score">${percent}</span>
      </div>
    `;
  }).join("");
}

startBtn.addEventListener("click", () => {
  showScreen(quizScreen);
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.answers[state.index] === null) return;
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    renderResult();
    showScreen(resultScreen);
  }
});

restartBtn.addEventListener("click", () => {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  renderQuestion();
  showScreen(quizScreen);
});

renderHeroAssets();
