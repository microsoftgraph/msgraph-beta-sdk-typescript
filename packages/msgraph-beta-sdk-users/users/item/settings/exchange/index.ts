/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createExchangeSettingsFromDiscriminatorValue, type ExchangeSettings } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exchange property of the microsoft.graph.userSettings entity.
 */
export interface ExchangeRequestBuilder extends BaseRequestBuilder<ExchangeRequestBuilder> {
    /**
     * Get a list of Exchange mailboxes that belong to a user. Currently, the mailbox types supported are the user's primary mailbox and shared mailboxes. To learn how to get a list of users in a tenant, see List users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExchangeSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     * @see {@link https://learn.microsoft.com/graph/api/usersettings-list-exchange?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ExchangeRequestBuilderGetQueryParameters> | undefined) : Promise<ExchangeSettings | undefined>;
    /**
     * Get a list of Exchange mailboxes that belong to a user. Currently, the mailbox types supported are the user's primary mailbox and shared mailboxes. To learn how to get a list of users in a tenant, see List users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExchangeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of Exchange mailboxes that belong to a user. Currently, the mailbox types supported are the user's primary mailbox and shared mailboxes. To learn how to get a list of users in a tenant, see List users.
 */
export interface ExchangeRequestBuilderGetQueryParameters {
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
export const ExchangeRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/settings/exchange{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ExchangeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExchangeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ExchangeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExchangeSettingsFromDiscriminatorValue,
        queryParametersMapper: ExchangeRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
