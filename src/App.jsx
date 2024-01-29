import './App.scss';
import { Canvas } from '@react-three/fiber';

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// 通过gltfjsx将模型转为jsx最终生成的jsx模型代码
import { useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useState } from 'react';

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/shoe.gltf');
  return (
    //  scale={4}: 模型放大4倍
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.partColor.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.partColor.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.partColor.caps}
      />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.partColor.sole}
      />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

useGLTF.preload('/shoe.gltf');

function App() {
  const [laces, setLaces] = useState('#fff');
  const [sole, setSole] = useState('#00f');
  const [mesh, setMesh] = useState('#f00');
  const [caps, setCaps] = useState('#0f0');
  return (
    <>
      <div className='container'>
        <div className='shoe-box'>
          <div className='cover'>
            <div className='shoe-canvas'>
              <Canvas>
                {/* 环境光 */}
                <ambientLight />

                {/* 聚光灯 */}
                <spotLight intensity={1} angle={0.1} position={[10, 20, 10]} />

                {/* 模型 */}
                <Model
                  partColor={{
                    laces: laces,
                    sole: sole,
                    mesh: mesh,
                    caps: caps,
                  }}
                />

                <OrbitControls />
              </Canvas>
            </div>
            <div className='title'>调整颜色</div>

            <div className='bottom'>
              <div className='changeMain changeColor'>
                <input
                  type='color'
                  value='#f62623'
                  id='mesh'
                  name='mesh'
                  onChange={(e) => {
                    setMesh(e.target.value);
                  }}
                />
                <div className='mesh name'>主体颜色</div>
              </div>

              <div className='changeLaces changeColor'>
                <input
                  type='color'
                  id='laces'
                  name='laces'
                  value='#0000e5'
                  onChange={(e) => {
                    setLaces(e.target.value);
                  }}
                />
                <div className='laces name'>鞋带颜色</div>
              </div>

              <div className='changeCaps changeColor'>
                <input
                  type='color'
                  id='caps'
                  name='caps'
                  value='#b2ec7d'
                  onChange={(e) => {
                    setCaps(e.target.value);
                  }}
                />
                <div className='caps name'>两侧点颜色</div>
              </div>

              <div className='changeSole changeColor'>
                <input
                  type='color'
                  id='sole'
                  name='sole'
                  value='#3309f0'
                  onChange={(e) => {
                    setSole(e.target.value);
                  }}
                />
                <div className='sole name'>鞋底颜色</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
