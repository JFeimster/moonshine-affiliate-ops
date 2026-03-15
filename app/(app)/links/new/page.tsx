import PageHeader from "@/components/app/PageHeader"
import LinkGeneratorForm from "@/components/forms/LinkGeneratorForm"

export default function LinkGeneratorPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Link Generator"
        description="Create tracked URLs with controlled sources, campaign assignment, and short-link preview."
      />
      <LinkGeneratorForm />
    </div>
  )
}
