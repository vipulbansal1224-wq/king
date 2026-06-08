import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>King International <br/><span className="text-accent">Online Education Portal</span></h1>
          <p>Enrich your learning journey with us! Elevate your skills and unlock your future with our expert-led courses.</p>
          <div className="hero-buttons">
            <Link href="/apply" className="btn btn-accent">Apply Now</Link>
            <Link href="/login" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Student Login</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="categories container section-padding">
        <div className="section-header">
          <h2>Start Your Journey</h2>
          <div className="underline"></div>
        </div>
        <div className="grid grid-cols-3">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Demo Exams</h3>
            <p>Unlock Your Future: Apply Now for Exciting Demo Exams Today!</p>
            <Link href="/apply" className="feature-link">Apply Here &rarr;</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Study Material</h3>
            <p>Click Here for Essential Study Materials and Resources.</p>
            <Link href="/login" className="feature-link">Access Materials &rarr;</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Demo Classes</h3>
            <p>Experience Excellence: Join Now for Free Demo Classes Online!</p>
            <Link href="/apply" className="feature-link">Join Class &rarr;</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container section-padding">
          <div className="section-header">
            <h2>About King International Academy</h2>
            <div className="underline"></div>
          </div>
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            <p>
              Where knowledge meets innovation. We are dedicated to providing a transformative learning experience, blending academic excellence with technological advancement. Our platform is designed to empower learners globally, offering a diverse range of courses led by industry experts.
            </p>
            <br/>
            <p>
              Navigate a dynamic virtual classroom, participate in interactive discussions, and access rich multimedia resources tailored to your learning needs. Whether you're advancing your career, exploring new interests, or enhancing your skills, our portal is your gateway to a world of possibilities. Join us in the pursuit of knowledge, where education transcends boundaries, and success knows no limits.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials container section-padding">
        <div className="section-header">
          <h2>Testimonials</h2>
          <div className="underline"></div>
        </div>
        <div className="grid grid-cols-2">
          <div className="testimonial-card">
            <p className="testimonial-text">"Very special thanks to prathap sir and Subha mam.... Words aren't enough to show how much I appreciate the things you have done for me ...I can do is say from the bottom of my heart, thank you!"</p>
            <h4 className="testimonial-author">- Successful Student</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"King international academy's guidance and support have helped me grow in ways beyond my wildest dreams. Thank you for always polishing me to be the best version of my career."</p>
            <h4 className="testimonial-author">- Happy Learner</h4>
          </div>
        </div>
      </section>

    </div>
  );
}
