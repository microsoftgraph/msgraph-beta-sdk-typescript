/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPersonCertificationCollectionResponseFromDiscriminatorValue, createPersonCertificationFromDiscriminatorValue, serializePersonCertification, type PersonCertification, type PersonCertificationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { PersonCertificationItemRequestBuilderRequestsMetadata, type PersonCertificationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certifications property of the microsoft.graph.profile entity.
 */
export interface CertificationsRequestBuilder extends BaseRequestBuilder<CertificationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the certifications property of the microsoft.graph.profile entity.
     * @param personCertificationId The unique identifier of personCertification
     * @returns {PersonCertificationItemRequestBuilder}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     byPersonCertificationId(personCertificationId: string) : PersonCertificationItemRequestBuilder;
    /**
     * Represents the details of certifications associated with a person.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PersonCertificationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<CertificationsRequestBuilderGetQueryParameters> | undefined) : Promise<PersonCertificationCollectionResponse | undefined>;
    /**
     * Create new navigation property to certifications for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PersonCertification>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     post(body: PersonCertification, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PersonCertification | undefined>;
    /**
     * Represents the details of certifications associated with a person.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to certifications for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPostRequestInformation(body: PersonCertification, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the details of certifications associated with a person.
 */
export interface CertificationsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const CertificationsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/profile/certifications{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CertificationsRequestBuilderNavigationMetadata: Record<Exclude<keyof CertificationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPersonCertificationId: {
        requestsMetadata: PersonCertificationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["personCertification%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CertificationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPersonCertificationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CertificationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CertificationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPersonCertificationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePersonCertification,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
