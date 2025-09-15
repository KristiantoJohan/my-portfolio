'use client'

import { Testimonial } from '@/lib/types'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import Timeline from '../Timeline/Timeline'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)

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
