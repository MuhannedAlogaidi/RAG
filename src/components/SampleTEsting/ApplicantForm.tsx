import { useState } from 'react'
import './ApplicantForm.css'

type FormState = {
  firstName: string
  middleName: string
  lastName: string
  dob: string
  email: string
  country: string
  gender: string
  skills: string[]
  about: string
}

const initialState: FormState = {
  firstName: '',
  middleName: '',
  lastName: '',
  dob: '',
  email: '',
  country: '',
  gender: '',
  skills: [],
  about: '',
}

export function ApplicantForm() {
  const [form, setForm] = useState<FormState>(initialState)

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleSkill(skill: string) {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Submitted form:', form)
  }

  return (
    <form className="applicant-form" onSubmit={handleSubmit}>
      <h2>Applicant Information</h2>

      <div className="row">
        <label>
          First Name
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />
        </label>

        <label>
          Middle Name
          <input
            type="text"
            value={form.middleName}
            onChange={(e) => updateField('middleName', e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />
        </label>
      </div>

      <div className="row">
        <label>
          Date of Birth
          <input
            type="date"
            value={form.dob}
            onChange={(e) => updateField('dob', e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
        </label>
      </div>

      <label>
        Country
        <select value={form.country} onChange={(e) => updateField('country', e.target.value)}>
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </label>

      <fieldset>
        <legend>Gender</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === 'male'}
            onChange={(e) => updateField('gender', e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === 'female'}
            onChange={(e) => updateField('gender', e.target.value)}
          />
          Female
        </label>
      </fieldset>

      <fieldset>
        <legend>Skills</legend>
        {['JavaScript', 'React', 'Node.js'].map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              checked={form.skills.includes(skill)}
              onChange={() => toggleSkill(skill)}
            />
            {skill}
          </label>
        ))}
      </fieldset>

      <label>
        About You
        <textarea
          rows={4}
          value={form.about}
          onChange={(e) => updateField('about', e.target.value)}
        />
      </label>

      <button type="submit">Submit Application</button>
    </form>
  )
}
export default ApplicantForm
