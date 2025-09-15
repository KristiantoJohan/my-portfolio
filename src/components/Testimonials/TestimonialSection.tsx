'use client'

import { Testimonial } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import Timeline from '../Timeline/Timeline'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = () => {
  return (
    <section id="testimonials" className='mb-14'>
      <SectionHeading
        title="// Work Experiences"
        className='mb-7'
      />

      <Timeline />
    </section>
  )
}

export default TestimonialSection
