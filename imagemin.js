import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';


const files1 = await imagemin(['./raw_img/*.{jpg,png}'], {
	destination: './src/public/img',
	plugins: [
		imageminWebp({quality: 50})
	]
});



console.log(files1);
