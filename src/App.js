import './App.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Shoe(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('shoe.glb'); 
  
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

function App() {
  return (
    <div className='App'>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.3} position={[5, 50, 50]} />
      <Suspense fallback={null}>
        <Shoe />
        <Environment files="space.hdr" />
        <ContactShadows />
      </Suspense>
      <OrbitControls />
    </Canvas>
    </div>
  );
}

export default App;
