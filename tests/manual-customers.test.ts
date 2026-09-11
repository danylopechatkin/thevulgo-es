import assert from 'node:assert/strict';
import test from 'node:test';
import {findManualCustomers, type ManualCustomer} from '../lib/manual-customers';
const ana: ManualCustomer = {id:'ana',full_name:'Ana García',phone:'+34 610 111 222',email:'ana@example.test',city:'Valencia',area:'Ruzafa',address:'Calle Cuba 12',apartment:'4B'};
const ks: ManualCustomer = {...ana,id:'ks',full_name:'KS',phone:null,alternate_phone:'+34 630 555 666',email:'ks@example.test'};
const clients=[ana,ks];
test('recent customers are available before typing and retain API recency order',()=>{
  const recent=Array.from({length:8},(_,i)=>({...ana,id:String(i)}));
  assert.deepEqual(findManualCustomers(recent,'  ').map(c=>c.id),['0','1','2','3','4']);
});
test('customer lookup supports one letter, case and accents',()=>{
  assert.deepEqual(findManualCustomers(clients,'K').map(c=>c.id),['ks']);
  assert.deepEqual(findManualCustomers(clients,'GARCIA').map(c=>c.id),['ana']);
});
test('phone lookup ignores punctuation and includes alternate numbers',()=>{
  assert.equal(findManualCustomers(clients,'(610) 111')[0].id,'ana');
  assert.equal(findManualCustomers(clients,'+34 630')[0].id,'ks');
});
test('email search retains complete saved contact/location data',()=>{
  assert.equal(findManualCustomers(clients,'ANA@EXAMPLE')[0],ana);
  assert.equal(findManualCustomers(clients,'ANA@EXAMPLE')[0].apartment,'4B');
});
test('unknown searches return no result and named searches do not accidentally match embedded phone digits',()=>{
  assert.deepEqual(findManualCustomers(clients,'unknown'),[]);
  assert.deepEqual(findManualCustomers(clients,'unknown610'),[]);
  assert.equal(findManualCustomers(Array.from({length:9},()=>ana),'garcia').length,9);
});
