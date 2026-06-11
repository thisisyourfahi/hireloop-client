import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import { Table, Chip } from "@heroui/react";
import { ApplicationRowCTA } from './ApplicationRowCTA';

function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

const MyApplicationsPage = async () => {
    const user = await getUserSession();
    const applications = await getApplicationsByApplicant(user?.id);

    return (
        <div className="min-h-screen px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-semibold text-white mb-1">My Applications</h1>
                <p className="text-zinc-500 text-sm mb-8">
                    {applications?.length ?? 0} application{applications?.length !== 1 ? "s" : ""} submitted
                </p>

                <Table>
                    <Table.ScrollContainer>
                        <Table.Content
                            aria-label="My Applications"
                            className="min-w-175 bg-[#1c1c1e] rounded-xl border border-white/5"
                        >
                            <Table.Header>
                                <Table.Column isRowHeader className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Job Title
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Company
                                </Table.Column>
                                <Table.Column className="text-zinc-400 text-xs uppercase tracking-wide">
                                    Applied On
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
                                        You haven&apos;t applied to any jobs yet.
                                    </p>
                                }
                            >
                                {(applications ?? []).map((app) => (
                                    <Table.Row key={app._id} className="border-t border-white/5 hover:bg-white/2">
                                        <Table.Cell>
                                            <span className="text-white font-medium text-sm">{app.jobTitle}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="text-zinc-300 text-sm">{app.companyName}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span className="text-zinc-400 text-sm">{formatDate(app.createdAt)}</span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Chip
                                                size="sm"
                                                variant="flat"
                                                className="bg-orange-500/10 text-orange-400 border-none text-xs"
                                            >
                                                Under Review
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <ApplicationRowCTA application={app} />
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

export default MyApplicationsPage;