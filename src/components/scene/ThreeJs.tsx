import { useRef, useEffect, FC, RefObject } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

type Props = {
	scrollRef: RefObject<HTMLDivElement>;
};

const ThreeJs: FC<Props> = ({ scrollRef }) => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		// scene.fog = new THREE.FogExp2(0xffccff, 0.060);
		const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
		const cameraMoveRange = 1.35;
		const cameraStartHeight = 0;

		//Position and rotation setup
		camera.position.z = 13;
		camera.position.x = -1.35;
		camera.position.y = cameraStartHeight;
		camera.rotation.set(0.225, 0, 0);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setClearColor("#0f3f4b");
		// console.log(`${window.innerWidth}px x ${window.innerHeight}px`);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		const composer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);

		const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.13, 1, 6.00);
		composer.addPass(bloomPass);

		if (mountRef.current) {
			mountRef.current?.appendChild(renderer.domElement);
		} else {
			console.log('Ref is null');
		}

		// Create geometry
		const g_cube = new THREE.BoxGeometry(1, 1, 1);
		const g_plane = new THREE.PlaneGeometry(200, 200);
		const g_cylinder = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 45, 30);
		const g_sphere = new THREE.IcosahedronGeometry(0.18, 4);

		// Create some materials
		const m_darkGray = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			roughness: 50,
		});

		const m_glow = new THREE.MeshStandardMaterial({
			color: 0x892710,
			emissive: 0x892710,
			emissiveIntensity: 120,
		});

		// Create our meshes
		const sm_cube1 = new THREE.Mesh(g_cube, m_darkGray);
		const sm_cube2 = new THREE.Mesh(g_cube, m_darkGray);
		const sm_cube3 = new THREE.Mesh(g_cube, m_darkGray);
		const sm_cylinder1 = new THREE.Mesh(g_cylinder, m_darkGray);
		const sm_cylinder2 = new THREE.Mesh(g_cylinder, m_darkGray);
		const sm_sphere1 = new THREE.Mesh(g_sphere, m_glow);
		const sm_sphere2 = new THREE.Mesh(g_sphere, m_glow);
		const sm_sphere3 = new THREE.Mesh(g_sphere, m_glow);
		const sm_sphere4 = new THREE.Mesh(g_sphere, m_glow);

		const sm_floor = new THREE.Mesh(g_plane, m_darkGray);
		const sm_wall = new THREE.Mesh(g_plane, m_darkGray);


		// Create a position for our light spheres
		const light1Pos0 = new THREE.Vector3(0.85, 1, 6.75);
		const light1Pos = new THREE.Vector3(0.85, 1, 6.75);
		const light2Pos0 = new THREE.Vector3(-0.25, -0.65, 5.75);
		const light2Pos = new THREE.Vector3(-0.25, -0.65, 5.75);
		const light3Pos0 = new THREE.Vector3(1, -1.25, 7.45);
		const light3Pos = new THREE.Vector3(1, -1.25, 7.45);
		const light4Pos0 = new THREE.Vector3(0, 2.75, 5.45);
		const light4Pos = new THREE.Vector3(0, 2.75, 5.45);


		// Position the meshes in the scene
		sm_cube1.position.set(0.65, 0.25, 6.25);
		sm_cube1.rotateOnWorldAxis(
			new THREE.Vector3(1, 0, 0),
			THREE.MathUtils.degToRad(55)
		);
		sm_cube1.rotateOnWorldAxis(
			new THREE.Vector3(0, 1, 0),
			THREE.MathUtils.degToRad(-35)
		);
		sm_cube1.rotateOnWorldAxis(
			new THREE.Vector3(0, 0, 1),
			THREE.MathUtils.degToRad(-45)
		);
		sm_cube1.scale.set(1.01, 1.01, 1.01);
		sm_cube1.castShadow = true;
		sm_cube1.receiveShadow = true;
		scene.add(sm_cube1);

		sm_cube2.position.set(0, 1.8, 4.25);
		sm_cube2.rotateOnWorldAxis(
			new THREE.Vector3(0, 1, 0),
			THREE.MathUtils.degToRad(30)
		);
		sm_cube2.rotateOnWorldAxis(
			new THREE.Vector3(1, 0, 0),
			THREE.MathUtils.degToRad(-1)
		);
		sm_cube2.rotateOnWorldAxis(
			new THREE.Vector3(0, 0, 1),
			THREE.MathUtils.degToRad(-10)
		);
		sm_cube2.scale.set(1.01, 1.01, 1.01);
		sm_cube2.castShadow = true;
		sm_cube2.receiveShadow = true;
		scene.add(sm_cube2);

		sm_cube3.position.set(1.15, -0.9, 4.25);
		sm_cube3.rotateOnWorldAxis(
			new THREE.Vector3(1, 0, 0),
			THREE.MathUtils.degToRad(28)
		);
		sm_cube3.rotateOnWorldAxis(
			new THREE.Vector3(0, 0, 1),
			THREE.MathUtils.degToRad(26)
		);
		sm_cube3.rotateOnWorldAxis(
			new THREE.Vector3(0, 1, 0),
			THREE.MathUtils.degToRad(74)
		);
		sm_cube3.scale.set(1.01, 1.01, 1.01);
		sm_cube3.castShadow = true;
		sm_cube3.receiveShadow = true;
		scene.add(sm_cube3);

		sm_sphere1.position.copy(light1Pos);
		scene.add(sm_sphere1);

		sm_sphere2.position.copy(light2Pos);
		scene.add(sm_sphere2);

		sm_sphere3.position.copy(light3Pos);
		scene.add(sm_sphere3);

		sm_sphere4.position.copy(light4Pos);
		scene.add(sm_sphere4);

		sm_cylinder1.position.set(0.45, -1, 2.45);
		sm_cylinder1.rotation.set(-0.35, 0.85, 0.95);
		scene.add(sm_cylinder1);

		sm_cylinder2.position.set(3.25, 1, 2.45);
		sm_cylinder2.rotation.set(-0.15, 2, 0.95);
		scene.add(sm_cylinder2);

		sm_floor.position.set(0, -2, 1.25);
		sm_floor.rotation.set(-0.5 * Math.PI, 0, 0);
		sm_floor.receiveShadow = true;
		scene.add(sm_floor);

		sm_wall.position.set(0, 2, -45.85);
		sm_wall.rotation.set(1.8 * Math.PI, 0, 0);
		sm_wall.receiveShadow = false;
		scene.add(sm_wall);

		// Create a light for the scene
		const light1 = new THREE.PointLight(0x892710, 15.3, 0);
		const light2 = new THREE.PointLight(0x892710, 15.3, 0);
		const light3 = new THREE.PointLight(0x892710, 15.3, 0);
		const light4 = new THREE.PointLight(0x892710, 15.3, 0);

		const lightDir = new THREE.DirectionalLight(0x0f3f4b, 4.2); // 1.79);

		light1.position.copy(light1Pos);
		light1.castShadow = true;
		light1.shadow.mapSize.width = 256;
		light1.shadow.mapSize.height = 256;
		light1.shadow.radius = 5;
		light1.shadow.blurSamples = 100;

		light2.position.copy(light2Pos);
		light2.castShadow = true;
		light2.shadow.mapSize.width = 256;
		light2.shadow.mapSize.height = 256;
		light2.shadow.radius = 5;
		light2.shadow.blurSamples = 100;

		light3.position.copy(light3Pos);
		light3.castShadow = true;
		light3.shadow.mapSize.width = 256;
		light3.shadow.mapSize.height = 256;
		light3.shadow.radius = 5;
		light3.shadow.blurSamples = 100;

		light4.position.copy(light3Pos);
		light4.castShadow = true;
		light4.shadow.mapSize.width = 256;
		light4.shadow.mapSize.height = 256;
		light4.shadow.radius = 5;
		light4.shadow.blurSamples = 100;


		lightDir.target.position.set(2.8, -2, -1.5);
		lightDir.castShadow = false;

		scene.add(light1);
		scene.add(light2);
		scene.add(light3);
		scene.add(light4)
		scene.add(lightDir);
		scene.add(lightDir.target);

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};
		window.addEventListener('resize', handleResize);

		render();

		const element = scrollRef.current;

		if (element) {
			const articleHeight = element.getBoundingClientRect().height;
			const pageHeight =
				element.children[0].getBoundingClientRect().height - articleHeight;

			element.addEventListener("scroll", function () {
				const scrollTop = element.scrollTop;
				const scrollPercent = scrollTop / pageHeight;

				camera.position.y = cameraStartHeight - cameraMoveRange * scrollPercent;
			});
		}

		function render() {
			requestAnimationFrame(render);

			sm_cube1.rotation.y += 0.003;
			sm_cube2.rotation.z += 0.003;
			sm_cube3.rotation.x += 0.004;

			light1Pos.y = light1Pos0.y + Math.sin(Date.now() * 0.0012) * 0.1;
			light2Pos.y = light2Pos0.y + Math.sin(Date.now() * 0.001 + 0.3) * 0.08;
			light3Pos.y = light3Pos0.y + Math.sin(Date.now() * 0.0015 - 0.15) * 0.1;
			light4Pos.y = light4Pos0.y + Math.sin(Date.now() * 0.0020 + 0.70) * 0.1;

			light1.position.copy(light1Pos);
			sm_sphere1.position.copy(light1Pos);
			light2.position.copy(light2Pos);
			sm_sphere2.position.copy(light2Pos);
			light3.position.copy(light3Pos);
			sm_sphere3.position.copy(light3Pos);
			light4.position.copy(light4Pos);
			sm_sphere4.position.copy(light4Pos);


			composer.render();
		}

		return () => {
			window.removeEventListener('resize', handleResize);
			mountRef.current?.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={mountRef} />;
};

export default ThreeJs;
