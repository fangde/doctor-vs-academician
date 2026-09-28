# 博士大战院士

在线游玩：https://fangde.github.io/doctor-vs-academician/

可直接部署的静态网页 2D 格斗游戏。角色由已提供的参考图与 Blender 场景导出，保留人脸、眼镜、机械翼和蟾蜍形象。

操作：← / → 左右移动，空格释放大招；移动端使用对应的屏幕按钮。自动悬停，不区分空格单击与双击。

首版可调规则：博士 100 生命，院士 240 生命。光炮射程 660，伤害 42；250 距离内追加光剑，总伤害 64。冷却 2.8 秒。院士会预警酸液落点与冲撞。任一方血量为零判定胜负，支持重开。切到后台自动暂停。音效可开关，默认关闭。

## 本地运行

在项目目录运行 `python3 -m http.server 4173 --directory dist`，浏览器打开 `http://localhost:4173`。

## 文件

- `dist/index.html`：游戏界面
- `dist/style.css`：桌面与手机样式
- `dist/engine.js`：规则、碰撞、伤害、冷却与胜负
- `dist/game.js`：绘制、输入、音效与界面
- `dist/assets/`：透明角色素材
- `check-game.mjs`：关键战斗逻辑检查，运行 `node check-game.mjs`

这些数值是首个可玩版本的实现选择，后续可按需求调整。

## GitHub Pages 发布

页面从 `gh-pages` 分支根目录发布。更新 `dist` 后提交到 `main`，再运行 `git subtree split --prefix dist -b pages-update` 和 `git push origin pages-update:gh-pages` 发布。
