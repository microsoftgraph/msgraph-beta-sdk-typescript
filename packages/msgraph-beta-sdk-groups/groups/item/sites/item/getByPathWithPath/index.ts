/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSiteFromDiscriminatorValue, type Site } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AnalyticsRequestBuilderRequestsMetadata, AnalyticsRequestBuilderUriTemplate, type AnalyticsRequestBuilder } from './analytics/';
import { ColumnsRequestBuilderRequestsMetadata, ColumnsRequestBuilderUriTemplate, type ColumnsRequestBuilder } from './columns/';
import { ContentTypesRequestBuilderRequestsMetadata, ContentTypesRequestBuilderUriTemplate, type ContentTypesRequestBuilder } from './contentTypes/';
import { CreatedByUserRequestBuilderRequestsMetadata, CreatedByUserRequestBuilderUriTemplate, type CreatedByUserRequestBuilder } from './createdByUser/';
import { DriveRequestBuilderRequestsMetadata, DriveRequestBuilderUriTemplate, type DriveRequestBuilder } from './drive/';
import { DrivesRequestBuilderRequestsMetadata, DrivesRequestBuilderUriTemplate, type DrivesRequestBuilder } from './drives/';
import { ExternalColumnsRequestBuilderRequestsMetadata, ExternalColumnsRequestBuilderUriTemplate, type ExternalColumnsRequestBuilder } from './externalColumns/';
import { GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata, GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderUriTemplate, type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder } from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/';
import { GetApplicableContentTypesForListWithListIdRequestBuilderRequestsMetadata, GetApplicableContentTypesForListWithListIdRequestBuilderUriTemplate, type GetApplicableContentTypesForListWithListIdRequestBuilder } from './getApplicableContentTypesForListWithListId/';
import { GetByPathWithPath1RequestBuilderNavigationMetadata, GetByPathWithPath1RequestBuilderRequestsMetadata, GetByPathWithPath1RequestBuilderUriTemplate, type GetByPathWithPath1RequestBuilder } from './getByPathWithPath1/';
import { InformationProtectionRequestBuilderRequestsMetadata, InformationProtectionRequestBuilderUriTemplate, type InformationProtectionRequestBuilder } from './informationProtection/';
import { ItemsRequestBuilderRequestsMetadata, ItemsRequestBuilderUriTemplate, type ItemsRequestBuilder } from './items/';
import { LastModifiedByUserRequestBuilderRequestsMetadata, LastModifiedByUserRequestBuilderUriTemplate, type LastModifiedByUserRequestBuilder } from './lastModifiedByUser/';
import { ListsRequestBuilderRequestsMetadata, ListsRequestBuilderUriTemplate, type ListsRequestBuilder } from './lists/';
import { OnenoteRequestBuilderRequestsMetadata, OnenoteRequestBuilderUriTemplate, type OnenoteRequestBuilder } from './onenote/';
import { OperationsRequestBuilderRequestsMetadata, OperationsRequestBuilderUriTemplate, type OperationsRequestBuilder } from './operations/';
import { PagesRequestBuilderRequestsMetadata, PagesRequestBuilderUriTemplate, type PagesRequestBuilder } from './pages/';
import { PermissionsRequestBuilderRequestsMetadata, PermissionsRequestBuilderUriTemplate, type PermissionsRequestBuilder } from './permissions/';
import { RecycleBinRequestBuilderRequestsMetadata, RecycleBinRequestBuilderUriTemplate, type RecycleBinRequestBuilder } from './recycleBin/';
import { SitesRequestBuilderRequestsMetadata, SitesRequestBuilderUriTemplate, type SitesRequestBuilder } from './sites/';
import { TermStoreRequestBuilderRequestsMetadata, TermStoreRequestBuilderUriTemplate, type TermStoreRequestBuilder } from './termStore/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getByPath method.
 */
export interface GetByPathWithPathRequestBuilder extends BaseRequestBuilder<GetByPathWithPathRequestBuilder> {
    /**
     * Provides operations to manage the analytics property of the microsoft.graph.site entity.
     */
    get analytics(): AnalyticsRequestBuilder;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.site entity.
     */
    get columns(): ColumnsRequestBuilder;
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
     */
    get contentTypes(): ContentTypesRequestBuilder;
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    get createdByUser(): CreatedByUserRequestBuilder;
    /**
     * Provides operations to manage the drive property of the microsoft.graph.site entity.
     */
    get drive(): DriveRequestBuilder;
    /**
     * Provides operations to manage the drives property of the microsoft.graph.site entity.
     */
    get drives(): DrivesRequestBuilder;
    /**
     * Provides operations to manage the externalColumns property of the microsoft.graph.site entity.
     */
    get externalColumns(): ExternalColumnsRequestBuilder;
    /**
     * Provides operations to manage the informationProtection property of the microsoft.graph.site entity.
     */
    get informationProtection(): InformationProtectionRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.site entity.
     */
    get items(): ItemsRequestBuilder;
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    get lastModifiedByUser(): LastModifiedByUserRequestBuilder;
    /**
     * Provides operations to manage the lists property of the microsoft.graph.site entity.
     */
    get lists(): ListsRequestBuilder;
    /**
     * Provides operations to manage the onenote property of the microsoft.graph.site entity.
     */
    get onenote(): OnenoteRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.site entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to manage the pages property of the microsoft.graph.site entity.
     */
    get pages(): PagesRequestBuilder;
    /**
     * Provides operations to manage the permissions property of the microsoft.graph.site entity.
     */
    get permissions(): PermissionsRequestBuilder;
    /**
     * Provides operations to manage the recycleBin property of the microsoft.graph.site entity.
     */
    get recycleBin(): RecycleBinRequestBuilder;
    /**
     * Provides operations to manage the sites property of the microsoft.graph.site entity.
     */
    get sites(): SitesRequestBuilder;
    /**
     * Provides operations to manage the termStore property of the microsoft.graph.site entity.
     */
    get termStore(): TermStoreRequestBuilder;
    /**
     * Invoke function getByPath
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Site
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Site | undefined>;
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
     getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder;
    /**
     * Provides operations to call the getApplicableContentTypesForList method.
     * @param listId Usage: listId='{listId}'
     * @returns a getApplicableContentTypesForListWithListIdRequestBuilder
     */
     getApplicableContentTypesForListWithListId(listId: string | undefined) : GetApplicableContentTypesForListWithListIdRequestBuilder;
    /**
     * Provides operations to call the getByPath method.
     * @param path1 Usage: path='{path1}'
     * @returns a getByPathWithPath1RequestBuilder
     */
     getByPathWithPath1(path1: string | undefined) : GetByPathWithPath1RequestBuilder;
    /**
     * Invoke function getByPath
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GetByPathWithPathRequestBuilderNavigationMetadata: Record<Exclude<keyof GetByPathWithPathRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval: {
        uriTemplate: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderUriTemplate,
        requestsMetadata: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata,
    },
    getApplicableContentTypesForListWithListId: {
        uriTemplate: GetApplicableContentTypesForListWithListIdRequestBuilderUriTemplate,
        requestsMetadata: GetApplicableContentTypesForListWithListIdRequestBuilderRequestsMetadata,
    },
    getByPathWithPath1: {
        uriTemplate: GetByPathWithPath1RequestBuilderUriTemplate,
        requestsMetadata: GetByPathWithPath1RequestBuilderRequestsMetadata,
        navigationMetadata: GetByPathWithPath1RequestBuilderNavigationMetadata,
    },
    analytics: {
        uriTemplate: AnalyticsRequestBuilderUriTemplate,
        requestsMetadata: AnalyticsRequestBuilderRequestsMetadata,
    },
    columns: {
        uriTemplate: ColumnsRequestBuilderUriTemplate,
        requestsMetadata: ColumnsRequestBuilderRequestsMetadata,
    },
    contentTypes: {
        uriTemplate: ContentTypesRequestBuilderUriTemplate,
        requestsMetadata: ContentTypesRequestBuilderRequestsMetadata,
    },
    createdByUser: {
        uriTemplate: CreatedByUserRequestBuilderUriTemplate,
        requestsMetadata: CreatedByUserRequestBuilderRequestsMetadata,
    },
    drive: {
        uriTemplate: DriveRequestBuilderUriTemplate,
        requestsMetadata: DriveRequestBuilderRequestsMetadata,
    },
    drives: {
        uriTemplate: DrivesRequestBuilderUriTemplate,
        requestsMetadata: DrivesRequestBuilderRequestsMetadata,
    },
    externalColumns: {
        uriTemplate: ExternalColumnsRequestBuilderUriTemplate,
        requestsMetadata: ExternalColumnsRequestBuilderRequestsMetadata,
    },
    informationProtection: {
        uriTemplate: InformationProtectionRequestBuilderUriTemplate,
        requestsMetadata: InformationProtectionRequestBuilderRequestsMetadata,
    },
    items: {
        uriTemplate: ItemsRequestBuilderUriTemplate,
        requestsMetadata: ItemsRequestBuilderRequestsMetadata,
    },
    lastModifiedByUser: {
        uriTemplate: LastModifiedByUserRequestBuilderUriTemplate,
        requestsMetadata: LastModifiedByUserRequestBuilderRequestsMetadata,
    },
    lists: {
        uriTemplate: ListsRequestBuilderUriTemplate,
        requestsMetadata: ListsRequestBuilderRequestsMetadata,
    },
    onenote: {
        uriTemplate: OnenoteRequestBuilderUriTemplate,
        requestsMetadata: OnenoteRequestBuilderRequestsMetadata,
    },
    operations: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
    },
    pages: {
        uriTemplate: PagesRequestBuilderUriTemplate,
        requestsMetadata: PagesRequestBuilderRequestsMetadata,
    },
    permissions: {
        uriTemplate: PermissionsRequestBuilderUriTemplate,
        requestsMetadata: PermissionsRequestBuilderRequestsMetadata,
    },
    recycleBin: {
        uriTemplate: RecycleBinRequestBuilderUriTemplate,
        requestsMetadata: RecycleBinRequestBuilderRequestsMetadata,
    },
    sites: {
        uriTemplate: SitesRequestBuilderUriTemplate,
        requestsMetadata: SitesRequestBuilderRequestsMetadata,
    },
    termStore: {
        uriTemplate: TermStoreRequestBuilderUriTemplate,
        requestsMetadata: TermStoreRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetByPathWithPathRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSiteFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const GetByPathWithPathRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/getByPath(path='{path}')";
/* tslint:enable */
/* eslint-enable */