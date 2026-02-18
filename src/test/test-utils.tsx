import { render, RenderOptions } from '@testing-library/react'

export const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, options)
