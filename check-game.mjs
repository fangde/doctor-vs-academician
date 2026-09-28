import assert from 'node:assert/strict';
import{createState,start,step,ultimate}from'./dist/engine.js';
const tick=(s,t,move=0)=>{for(let i=0;i<t*60;i++)step(s,1/60,move);};
let s=start(createState());s.b.x=800;s.p.x=100;assert(ultimate(s));assert.equal(s.b.hp,240);assert(!ultimate(s));tick(s,3);s.p.x=s.b.x-200;assert(ultimate(s,'sword'));assert.equal(s.b.hp,176);assert.equal(s.hits,1);
s=start(createState());s.nextAttack=0;step(s,.01);assert(s.attack);const target=s.attack.target;tick(s,1.1,-1);assert.equal(s.p.hp,100);assert(s.events.some(e=>e.type==='impact'));
s=start(createState());s.nextAttack=0;tick(s,1.1);assert.equal(s.p.hp,85);s.phase='paused';const time=s.time;tick(s,2,1);assert.equal(s.time,time);
s=start(createState());s.nextAttack=999;s.b.x=500;s.p.x=400;for(let i=0;i<4;i++){ultimate(s,'sword');tick(s,2.9);}assert.equal(s.phase,'won');assert.equal(s.b.hp,0);assert(!ultimate(s));start(s);assert.equal(s.p.hp,100);assert.equal(s.b.hp,240);assert.equal(s.cooldown,0);
s=start(createState());tick(s,60);assert.equal(s.phase,'lost');assert.equal(s.p.hp,0);start(s);tick(s,20,-1);assert(s.p.x>=95);tick(s,20,1);assert(s.p.x<=1185);
console.log('PASS: cooldown, ranges, melee damage, warning dodge, acid collision, pause, win, loss, restart, boundaries');

s=start(createState());s.p.x=400;s.b.x=700;assert(ultimate(s,'sword'));assert.equal(s.b.hp,240);assert.equal(s.ult.melee,true);assert(!ultimate(s,'laser'));tick(s,3);s.b.x=s.p.x+100;assert(ultimate(s));assert.equal(s.b.hp,198);assert.equal(s.ult.melee,false);console.log('PASS: explicit sword misses beyond 250; shared cooldown; close laser remains laser');
