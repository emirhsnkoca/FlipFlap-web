"use client";

import { useEffect, useState, useRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";

interface AnimatedChickModelProps {
  url: string;
}

export function AnimatedChickModel({ url }: AnimatedChickModelProps) {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const [animations, setAnimations] = useState<THREE.AnimationClip[]>([]);
  const currentActionRef = useRef<THREE.AnimationAction | null>(null);

  // Animasyon yükleme
  useEffect(() => {
    const loader = new FBXLoader();
    const textureLoader = new TextureLoader();
    const animLoader = new FBXLoader();
    
    const manager = new THREE.LoadingManager();
    manager.onError = () => {};
    loader.manager = manager;

    // Texture yükle
    const chickTexture = textureLoader.load('/models/T_Chick.png', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    });

    // Model yükle
    loader.load(url, (fbx) => {
      const box = new THREE.Box3().setFromObject(fbx);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3.5 / maxDim;
      
      fbx.scale.setScalar(scale);
      
      const center = box.getCenter(new THREE.Vector3());
      fbx.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

      // Texture uygula
      fbx.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            map: chickTexture,
            color: 0xffffff,
            roughness: 0.8,
            metalness: 0.1,
            side: THREE.DoubleSide,
          });
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });

      // Animasyon yükle
      animLoader.load('/models/Chick_Animations.fbx', (animFbx) => {
        setAnimations(animFbx.animations);
        const newMixer = new THREE.AnimationMixer(fbx);
        setMixer(newMixer);
        
        // Idle_A animasyonunu başlat
        const idleClip = animFbx.animations.find(anim => anim.name === 'Idle_A');
        if (idleClip) {
          const idleAction = newMixer.clipAction(idleClip);
          idleAction.play();
          currentActionRef.current = idleAction;
        }
        
        console.log('✅ Animasyonlar yüklendi');
      });

      setModel(fbx);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // Hit animasyonu oynatma fonksiyonu
  const playHitAnimation = () => {
    if (!mixer || !animations.length) return;

    const hitClip = animations.find(anim => anim.name === 'Hit');
    const idleClip = animations.find(anim => anim.name === 'Idle_A');
    
    if (!hitClip || !idleClip) return;

    // Mevcut animasyonu durdur
    if (currentActionRef.current) {
      currentActionRef.current.stop();
    }

    // Hit animasyonunu oynat (loop olmadan)
    const hitAction = mixer.clipAction(hitClip);
    hitAction.reset();
    hitAction.setLoop(THREE.LoopOnce, 1);
    hitAction.clampWhenFinished = true;
    hitAction.play();
    currentActionRef.current = hitAction;

    // Hit bitince Idle'a dön
    const onFinished = () => {
      const idleAction = mixer.clipAction(idleClip);
      idleAction.reset();
      idleAction.play();
      currentActionRef.current = idleAction;
      
      mixer.removeEventListener('finished', onFinished);
    };
    
    mixer.addEventListener('finished', onFinished);
  };


  // Animasyon güncelleme
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  if (!model) {
    return (
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFA500" emissiveIntensity={0.3} />
      </mesh>
    );
  }

  return (
    <primitive 
      object={model} 
      onClick={(e: any) => {
        e.stopPropagation();
        playHitAnimation();
        console.log('💥 Civcive tıklandı!');
      }}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e: any) => {
        e.stopPropagation();
        document.body.style.cursor = 'default';
      }}
    />
  );
}

