/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserFromDiscriminatorValue, type User } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MailboxSettingsRequestBuilderRequestsMetadata, type MailboxSettingsRequestBuilder } from './mailboxSettings/index.js';
// @ts-ignore
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the user property of the microsoft.graph.engagementRoleMember entity.
 */
export interface UserRequestBuilder extends BaseRequestBuilder<UserRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * User entity of the member who has been assigned the role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<User>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * User entity of the member who has been assigned the role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * User entity of the member who has been assigned the role.
 */
export interface UserRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const UserRequestBuilderUriTemplate = "{+baseurl}/employeeExperience/roles/{engagementRole%2Did}/members/{engagementRoleMember%2Did}/user{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserRequestBuilderNavigationMetadata: Record<Exclude<keyof UserRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    mailboxSettings: {
        requestsMetadata: MailboxSettingsRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: UserRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
