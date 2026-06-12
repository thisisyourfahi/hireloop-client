import { getCompanies } from '@/lib/api/companies';
import { Table, Chip } from "@heroui/react";
import CompanyRowCTA from './CompanyRowCTA';

function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

const AdminCompanies = async () => {
    const companies = await getCompanies();
    

    return (
        <div className="min-h-screen px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-semibold text-white mb-1">Companies</h1>
                <p className="text-zinc-500 text-sm mb-8">
                    {companies?.length ?? 0} compan{companies?.length !== 1 ? "ies" : "y"} registered
                </p>

                <Table>
                    <Table.ScrollContainer>
                        <Table.Content
                            aria-label="Companies"
                            className="min-w-175 bg-[#1c1c1e] rounded-xl border border-white/5"
                        >
                            <Table.Header>
                                <Table.Column isRowHeader className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Company Name
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Industry
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Joined
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Status
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide text-right">
                                    Actions
                                </Table.Column>
                            </Table.Header>

                            <Table.Body
                                emptyContent={
                                    <p className="text-zinc-500 py-10 text-center text-sm">
                                        No companies registered yet.
                                    </p>
                                }
                            >
                                {(companies ?? []).map((company) => (
                                    <Table.Row key={company._id} className="border-t border-white/5 hover:bg-white/2">
                                        <Table.Cell>
                                            <span className="text-white font-medium text-sm">{company.name}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="text-zinc-300 text-sm">{company.industry ?? "—"}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="text-zinc-400 text-sm">{formatDate(company.createdAt)}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Chip
                                                size="sm"
                                                variant="flat"
                                                className="bg-orange-500/10 text-orange-400 border-none text-xs"
                                            >
                                                {company?.status || 'Pending'}
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <CompanyRowCTA company={company} />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
};

export default AdminCompanies;