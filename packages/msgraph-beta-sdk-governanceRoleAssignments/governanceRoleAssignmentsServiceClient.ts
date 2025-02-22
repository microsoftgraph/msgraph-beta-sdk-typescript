/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { GovernanceRoleAssignmentsRequestBuilderNavigationMetadata, GovernanceRoleAssignmentsRequestBuilderRequestsMetadata, type GovernanceRoleAssignmentsRequestBuilder } from './governanceRoleAssignments/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new GovernanceRoleAssignmentsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createGovernanceRoleAssignmentsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<GovernanceRoleAssignmentsServiceClient>(requestAdapter, pathParameters, GovernanceRoleAssignmentsServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface GovernanceRoleAssignmentsServiceClient extends BaseRequestBuilder<GovernanceRoleAssignmentsServiceClient> {
    /**
     * Provides operations to manage the collection of governanceRoleAssignment entities.
     */
    get governanceRoleAssignments(): GovernanceRoleAssignmentsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GovernanceRoleAssignmentsServiceClientNavigationMetadata: Record<Exclude<keyof GovernanceRoleAssignmentsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    governanceRoleAssignments: {
        requestsMetadata: GovernanceRoleAssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: GovernanceRoleAssignmentsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const GovernanceRoleAssignmentsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
