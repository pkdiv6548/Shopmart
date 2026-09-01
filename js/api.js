'use strict';
/* Backend seam: later replace these functions with fetch('/api/...'). */
window.VERVE_API={
 async getProducts(){return structuredClone(window.VERVE_DATA.products);},
 async getProduct(id){return (await this.getProducts()).find(p=>p.id===Number(id))||null;},
 async subscribe(email){return {ok:true,email};},
 async signIn(email){return {ok:true,email};},
 async createOrder(order){return {ok:true,orderId:'VRV-'+Date.now().toString().slice(-8),order};}
};
