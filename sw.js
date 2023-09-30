const staticCacheName = 'keyCache_v1';

const fileUrl = [
  'index.html'
  ];
  
self.addEventListener('install',async event =>{
  const cache = await caches.open(staticCacheName);
  await cache.addAll(fileUrl);
});

self.addEventListener('activate',async event=>{
  const cachesNames = await caches.keys()
  await Promise.all(
    cachesNames.filter(name => name !== staticCacheName).map(name => cache.delete(name))
    )
});

self.addEventListener('fetch',event=>{
  console.log('fetch',event.request.url);
})