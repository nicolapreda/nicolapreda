document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'data-youtube-video' attribute
    const videoContainers = document.querySelectorAll('[data-youtube-video]');

    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            // Prevent multiple clicks
            if (this.classList.contains('active')) return;
            this.classList.add('active');

            const id = this.getAttribute('data-video-id');
            const title = this.getAttribute('data-video-title');

            if (!id) {
                console.error('No video ID found for container', this);
                return;
            }

            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.className = 'w-full h-full';
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
            iframe.title = title || 'YouTube Video';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;

            // Clear container and append iframe
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });
});
