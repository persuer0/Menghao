# Menghao Yin · Academic Portfolio

An English academic homepage focused on embodied intelligence, world models, vision-language-action policies, and robot learning. Built with semantic HTML, CSS, and vanilla JavaScript. No build step, package installation, or external font service is required.

## Local preview

From this directory:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080>. The page also works by opening `index.html` directly.

## Content

- **Research:** TS-WAM, with its [arXiv preprint](https://arxiv.org/abs/2610.21922), and Drift-JEPA. Submission statuses are carried over from the source portfolio and are explicitly labeled as under review.
- **Experience:** AI algorithm internship at Yuanxing Guangnian Technology, with four real-robot demonstrations; the Tsinghua AIR embodied AI intensive program, focused on vision-language planning and simulation.
- **Workshop:** Team RoboThinker’s first-place finish in the ICRA 2026 Workshop Competition, ManipDojo Challenge; individual policy evaluation and reinforcement learning post-training contributions; official certificate.
- **Entrepreneurship:** TRI_ME, a robotic personal-care prototype developed during the inaugural Xiaohongshu Hackathon Grand Finale, including the hardware-track third prize and team prize money.

The portfolio intentionally excludes education history, earlier personal competition results, and embedded-systems projects. The portrait is a face-only crop to exclude identifying clothing, event signage, and competition hardware. Only selected assets are reused; the source repository and its Git history are not copied.

## Files

- `index.html`: English content, paper links, submission statuses, and accessible media descriptions.
- `css/style.css`: responsive academic layout and print styling.
- `js/main.js`: mobile navigation, active section links, accessible native image dialog, and video playback coordination.
- `images/papers/`: research method figures.
- `images/workshop/ManipDojo.png`: the original workshop certificate.
- `images/portrait.jpg`: cropped portrait, without the original image or its metadata.
- `images/posters/`: pre-generated video thumbnails.
- `videos/internship/`: browser-compatible H.264/AAC demonstrations.
- `videos/venture/tri-me.mp4`: browser-compatible hackathon demonstration.

Research figures and the certificate open in a keyboard-accessible dialog; Escape closes it and returns focus to the originating link. Without JavaScript, the links open the full images directly. Videos load only when requested. System fonts and local assets keep the core page independent of third-party services.

## Publishing

This is an independent local Git repository. No remote is configured. To publish later, create a remote repository, push the site, and configure GitHub Pages to serve the repository root. Relative asset paths support both a user site and a project site. `.nojekyll` allows GitHub Pages to serve the files as a plain static site.

Update paper statuses manually as review decisions become available. No accepted-publication status or numerical benchmark score is inferred.
